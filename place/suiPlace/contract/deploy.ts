import 'dotenv/config';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { fromBase64 } from '@mysten/sui/utils';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { SuiClient, SuiObjectChange } from '@mysten/sui/client';
import { Transaction } from '@mysten/sui/transactions';
import { SuiTransactionBlockResponse } from '@mysten/sui/client';
import { writeFileSync } from 'write-file-safe'

// const privateKey = process.env.DELOYER_B64_PRIVKEY;
const privateKey = "AOsDLbtPr2/4HRzHCum7UZrX/L0fZ6NWggUvJjfMDT+Q";
if (!privateKey) {
    throw new Error("Error: DELOYER_B64_PRIVKEY not set as env variable");
}

const keypair = Ed25519Keypair.fromSecretKey(fromBase64(privateKey).slice(1));
const pathToContract = path.join(dirname(fileURLToPath(import.meta.url)), '../../contract')

// const client = new SuiClient({ url: 'https://fullnode.localnet.sui.io:443' });
const client = new SuiClient({ url: 'http://127.0.0.1:9000' });

console.log('Building move code ... ');
const { modules, dependencies } = JSON.parse(execSync(
    `sui move build --dump-bytecode-as-base64 --path ${pathToContract}`,
    { encoding: "utf-8" }
));

console.log("Deploying from address: ", keypair.toSuiAddress());

const deploy_trx = new Transaction();
const [upgradeCap] = deploy_trx.publish({
    modules,
    dependencies,
});
// deploy_trx.transferObjects([upgradeCap], deploy_trx.pure(keypair.toSuiAddress()));
deploy_trx.transferObjects([upgradeCap], keypair.toSuiAddress());
deploy_trx.setGasBudget(50000000000);

const res: SuiTransactionBlockResponse = await client.signAndExecuteTransaction({
    signer: keypair,
    transaction: deploy_trx,
    options: {
        showBalanceChanges: true,
        showEffects: true,
        showEvents: true,
        showInput: false,
        showObjectChanges: true,
        showRawInput: false,
    }
});
console.log("res: ", res);

// const parse_cost = (amount: string) => Math.abs(parseInt(amount)) / 1_000_000_000;

// if (balanceChanges) {
//     console.log("Cost to deploy: ", parse_cost(balanceChanges[0].amount), "SUI");
// }

// if (!objectChanges) {
//     throw new Error("Error: RPC did not return objectChanges");
// }

// console.log("object changes: ", objectChanges);
// const published_event = objectChanges?.find(obj => obj.type == "published");
// if (published_event?.type != "published") throw new Error("No published type found")


// const find_one_by_type = (changes: SuiObjectChange[] | null | undefined, type: string) => {
//     const object_change = changes?.find(change => change.type == "created" && change.objectType == type);
//     if (object_change?.type == "created") {
//         return object_change.objectId;
//     }
// }

// const package_id = published_event?.packageId;
// const place_type = `${package_id}::sui_place::Place`;

// const place_id = find_one_by_type(objectChanges, place_type);

// if (!place_id) {
//     throw new Error("Error: Could not find place creation in results of publish")
// }

// let deployed_addresses = {
//     types: {
//         PLACE: place_type,
//     },
//     PACKAGE_ID: package_id,
//     PLACE: place_id,
// }

// const read_quadrant_trx = new Transaction()
// const [_] = read_quadrant_trx.moveCall({
//     target: `${package_id}::sui_place::get_quadrants`,
//     arguments: [read_quadrant_trx.object(place_id ?? "")]
// });

// console.log("Getting address of quadrants ... ");

// const read_result = await client.devInspectTransactionBlock({
//     transactionBlock: read_quadrant_trx,
//     sender: keypair.toSuiAddress(),
// });
// const quadrants = read_result.results?.[0]?.returnValues?.[0]?.[0];
// if (!quadrants || quadrants.length != 129) {
//     throw new Error('Incorrect value for quadrants result');
// }

// const [unused, ...bytes] = quadrants ?? [];
// const chunked_address_bytes = Array.from({ length: 4 }).map((_, i) => bytes.slice(i * 32, (i + 1) * 32))
// const addresses = chunked_address_bytes.map(address_bytes => "0x" + address_bytes.map(byte => byte.toString(16).padStart(2, "0")).join(""))
// deployed_addresses = Object.assign(deployed_addresses, {
//     QUADRANT_ADDRESSES: addresses
// })

// console.log("Writting addresses to json ...")

// const path_to_address_file = path.join(dirname(fileURLToPath(import.meta.url)), "../src/deployed_addresses.json")
// writeFileSync(path_to_address_file, JSON.stringify(deployed_addresses, null, 4))