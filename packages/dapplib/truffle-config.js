require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind exchange inflict entire success soldier'; 
let testAccounts = [
"0xa958d2e83c28baf626877a27131f2b541337e194ba1b99a2d0a371edd4b6830e",
"0xcad33744a35bf340895c6f9a8db4b7a3bd2d914ca3e0cbd32dc7fbe73733bea3",
"0xd0eb2a5ad26ec7a135be8464a2e934f19ea5c56762bca1e84859e4b036774784",
"0xe2a708877b02bfd526b87c3913910f24a3b61aef49ce79fbcb9e17de7166a58e",
"0xad26bb0c038a5dc06c599c89a92ea800348db74307e7e345f9e4dfb5b1c1121a",
"0xfb9941e1e0ea96d871e930423ec6a0f42a6cde0bf58541414307d3fc5678d4d5",
"0x73a6774c8cd10ea8c02b90ef54b9d7c9ee0cbcea16f2c96347c7a9459f98bd49",
"0xf6893c1963700519d9e86390bee4ab534c5c6a693961e8291fd2e111ae64f7b2",
"0xb8cecec411e5082388e0167757a3cb5292e2f01228f0aa4a1e73bc15591bdda8",
"0xfed357bdc97bffb58a159e6096814cc61cdd1c377ddad477f21b14518230c6de"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

