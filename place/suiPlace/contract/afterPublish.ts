import 'dotenv/config';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { fromBase64 } from '@mysten/sui/utils';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { Transaction } from '@mysten/sui/transactions';
import { writeFileSync } from 'fs';
import { useSuiClient } from '@mysten/dapp-kit';
import { SuiClient } from '@mysten/sui/client';

const PACKAGE_ID = "0x206a8856f184bba87d1e4cb440da380ea2d3fec3e65cba4abd4ba22769a86f2f";
const PLACE_ID = "0xa304c78d2b7088ad9e4391eb425294a177e6b91a50e79110fd82c76d22dafc88";

const privateKey = "AOsDLbtPr2/4HRzHCum7UZrX/L0fZ6NWggUvJjfMDT+Q";
if (!privateKey) {
    throw new Error("Error: DELOYER_B64_PRIVKEY not set as env variable");
}

const keypair = Ed25519Keypair.fromSecretKey(fromBase64(privateKey).slice(1));
const client = new SuiClient({ url: 'http://127.0.0.1:9000' });

const package_id = PACKAGE_ID;
const place_type = `${package_id}::sui_place::Place`;

const place_id = PLACE_ID;

if (!place_id) {
    throw new Error("Error: Could not find place creation in results of publish")
}

let deployed_addresses = {
    types: {
        PLACE: place_type,
    },
    PACKAGE_ID: package_id,
    PLACE: place_id,
}

const read_quadrant_trx = new Transaction()
const [_] = read_quadrant_trx.moveCall({
    target: `${package_id}::sui_place::getQuarant`,
    arguments: [read_quadrant_trx.object(place_id ?? "")]
});

console.log("Getting address of quadrants ... ");

const read_result = await client.devInspectTransactionBlock({
    transactionBlock: read_quadrant_trx,
    sender: keypair.toSuiAddress(),
});
const quadrants = read_result.results?.[0]?.returnValues?.[0]?.[0];
if (!quadrants || quadrants.length != 129) {
    throw new Error('Incorrect value for quadrants result');
}

const [unused, ...bytes] = quadrants ?? [];
const chunked_address_bytes = Array.from({ length: 4 }).map((_, i) => bytes.slice(i * 32, (i + 1) * 32))
const addresses = chunked_address_bytes.map(address_bytes => "0x" + address_bytes.map(byte => byte.toString(16).padStart(2, "0")).join(""))
deployed_addresses = Object.assign(deployed_addresses, {
    QUADRANT_ADDRESSES: addresses
})

console.log("Writting addresses to json ...")

const path_to_address_file = path.join(dirname(fileURLToPath(import.meta.url)), "../src/deployed_addresses.json")
writeFileSync(path_to_address_file, JSON.stringify(deployed_addresses, null, 4))