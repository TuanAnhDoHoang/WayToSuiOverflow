import 'dotenv/config';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { fromB64 } from '@mysten/sui/utils';
import { execSync } from "child_process"
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { SuiClient } from '@mysten/sui/client';
import { Transaction } from '@mysten/sui/transactions';

const privateKey = 'AOsDLbtPr2/4HRzHCum7UZrX/L0fZ6NWggUvJjfMDT+Q';
if (!privateKey) {
    console.log("Error: DELOYER_B64_PRIVKEY not set as env variable");
    process.exit(1);
}

const keypair = Ed25519Keypair.fromSecretKey(fromB64(privateKey).slice(1));
const pathToContract = path.join(dirname(fileURLToPath(import.meta.url)), '../../../contract')

const client = new SuiClient({ url: 'https://fullnode.devnet.sui.io:443' });

console.log('Building move code ... ');
const { modules, dependencies } = JSON.parse(execSync(
    `sui move build --dump-bytecode-as-base64 --path ${pathToContract}`,
    { encoding: "utf-8" }
));

console.log("Deploying from address: ", keypair.toSuiAddress());


const gasPayments = [
    '0x514c9ec82a959a74ee545dea81b1895f687d7788c8ccc3dda0341a14a558f9e4',
    '0xf843e1df73454defea9dee953c55a41ddbca6f5c6a03b3bb67243d140fbd777d'
]
const deploy_trx = new Transaction();
// deploy_trx.setGasPayment([...gasPayments])
const [upgradeCap] = deploy_trx.publish({
    modules,
    dependencies,
});
// deploy_trx.transferObjects([upgradeCap], deploy_trx.pure(keypair.toSuiAddress()));
deploy_trx.transferObjects([upgradeCap], keypair.toSuiAddress());
const changes = client.signAndExecuteTransaction({
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

console.log(changes);
