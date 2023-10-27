import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("5k2cALiKk3crXjLbFvPoFCDBJwZ67LhtbkDLv89sPh3g") // PUBKEY of person you want to create the token account
const decoded = base58.decode('2kiNiQJodeeidhQ6s4Rj2LuzxpMtR7edFW9x2z9EoXm9pj9vgeyrhhRADvyj2zN2ykyrdELEL9W4rhq1m8Nm4pdp')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

const tokenMint = "sSrVKHsRNdHP1KEY3KQ4jSPzPHZepZSn94fqBeJP1Jn"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();