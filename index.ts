console.log("Hello via Bun!");
console.log(process.env.PRIVATE_KEY);

import { IBundler, Bundler } from '@biconomy/bundler'
import { ethers } from 'ethers'
import { ChainId } from "@biconomy/core-types"
import {  BiconomySmartAccountV2, DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account"

async function getProvider() {
  try {
    // Specify the network (Mumbai testnet)
    const provider = ethers.getDefaultProvider("maticMumbai");

    // Get the network information
    const network = await provider.getNetwork();
    console.log('Connected to network:', network.name);

    // Get the block number
    const blockNumber = await provider.getBlockNumber();
    console.log('Latest block number:', blockNumber);
  } catch (error) {
    console.error('Error:', error);
  }
}

const provider = getProviderExample();
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY || "");

const bundler: IBundler = new Bundler({
  bundlerUrl: 'https://bundler.biconomy.io/api/v2/80001/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44',     
  chainId: ChainId.POLYGON_MUMBAI,
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
})
