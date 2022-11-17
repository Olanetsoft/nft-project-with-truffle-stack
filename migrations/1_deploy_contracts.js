var NFTCollection = artifacts.require("./NFTCollection.sol");

module.exports = function (deployer) {
  deployer.deploy(
    NFTCollection,
    "https://ipfs.io/ipfs/YOUR_HASH_HERE",
    "NFT DEMO",
    "NFTD"
  );
};
