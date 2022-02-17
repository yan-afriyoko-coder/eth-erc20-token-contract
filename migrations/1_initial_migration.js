const Cryptos = artifacts.require("Cryptos");

module.exports = function (deployer) {
  deployer.deploy(Cryptos);
};
