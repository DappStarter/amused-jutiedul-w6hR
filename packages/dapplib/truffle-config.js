require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift release still minor grace casual force genius'; 
let testAccounts = [
"0x35e195410bb16fd524950832b0a44dab297ce5c57a05137cb2055b1433dc976e",
"0xb66d3ed732ff0461d10499ec881829ede1a36ac07d63945af0a3037df40a235b",
"0x3c223e4632533d686f49b3a2dcdb63fb21aa345b66249ee430d01375b11f80fd",
"0xf37c47c4764ebacf0e6e15d31cc077f28df42ea86c18f83acdc24ff31b25afcc",
"0xa2b3be56e43467fbd7e89df05f5e3aef68489a1a4cf632370bbc3a3093e16a29",
"0x56edd9c6ff520d787a5313697a778e7ca87aed04070289561f03b9d96ac64937",
"0xb9a4b768415ee612c29b28da18f4520f35b770c0fa87d50c730a777092ea5358",
"0x8edee22d6aa57be69cea19a3b00acd54adc291aee92c550ba42db649b26341ba",
"0x874746d023b938bea1e95f129e94520e37c1ee589883e994da0e65ab5555c867",
"0x6b299aa2629e2d5589b25aa23f4d629cc25b7e2cc93bac66a458430a63516970"
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

