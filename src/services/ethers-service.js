export const ethers = require("ethers");

//Mumbai Matic testnet config
export const network = ethers.providers.getNetwork(80001);

// Ethers.js provider initialization
export const url = "https://filecoin-hyperspace.chainup.net/rpc/v1";

export const customHttpProvider = new ethers.providers.JsonRpcProvider(url);