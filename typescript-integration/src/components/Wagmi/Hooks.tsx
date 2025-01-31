/** @format */

import {
  getAccount,
  sendTransaction,
  waitForTransactionReceipt,
} from "@wagmi/core";
import { parseEther, isAddress } from "viem";

import { config } from "./WagmiConfig.js";

export const Hooks = () => {
  interface TransactionResult {
    status: boolean;
    hash: string;
    message: string;
  }

  const { address } = getAccount(config);

  const sendTransactions = async (
    walletAddress: `0x${string}`, // Ensure it's a valid Ethereum address
    amount: string | number
  ): Promise<TransactionResult> => {
    if (!isAddress(walletAddress)) {
      return {
        status: false,
        hash: "",
        message: "Invalid Wallet Address address!",
      };
    }

    const result = await sendTransaction(config, {
      account: address,
      to: walletAddress,
      value: parseEther(amount.toString()), // Ensure it's a string
    });

    const txHash = await waitForTransactionReceipt(config, {
      hash: result,
    });

    console.log("txHash", result, txHash);

    if (txHash.status) {
      return {
        status: true,
        hash: result,
        message: "Transaction Sent Successfully!",
      };
    } else {
      return {
        status: false,
        hash: "0x0000000000000000000000000000000000000000000000000000000000000000",
        message: "Transaction Failed!",
      };
    }
  };

  return { sendTransactions: sendTransactions };
};
