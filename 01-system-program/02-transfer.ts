import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('2kiNiQJodeeidhQ6s4Rj2LuzxpMtR7edFW9x2z9EoXm9pj9vgeyrhhRADvyj2zN2ykyrdELEL9W4rhq1m8Nm4pdp')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('5k2cALiKk3crXjLbFvPoFCDBJwZ67LhtbkDLv89sPh3g');
    const publicKeyTo = new Web3.PublicKey('EdY5p1mUuc9ExgMUNW6fgrUTSDWAtuBoAgoiy4U9mQar');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();