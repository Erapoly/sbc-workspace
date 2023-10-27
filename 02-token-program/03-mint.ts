import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('ssSrVKHsRNdHP1KEY3KQ4jSPzPHZepZSn94fqBeJP1Jn'), //mint 
        new Web3.PublicKey('5k2cALiKk3crXjLbFvPoFCDBJwZ67LhtbkDLv89sPh3g'), //owner
        new Web3.PublicKey('FMtF6h2h67cpFuNtiJS5tbyFUxJUYFUiEdKHtu5SoWjn'), //authority
        1, //amount
    )
    console.log('mint Token ', mintToken)
    //mint token: 2f4A9nhYqkPjbmrtExbaGVSberTiN21MTNnyHQvBeGsW6dJDNjdzvbmNYEqSfddhNdWCEcyX5oQhFBERVoahRSrC

}
main()
