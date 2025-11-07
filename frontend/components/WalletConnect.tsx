"use client";
import { useState } from "react";

export default function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  }

  return (
    <div className="p-4 border rounded-xl flex items-center gap-3">
      {account ? (
        <span className="text-green-600 font-medium">
          Connected: {account.slice(0, 6)}...
        </span>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
