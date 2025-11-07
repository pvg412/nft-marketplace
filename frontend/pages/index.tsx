"use client";
import WalletConnect from "../components/WalletConnect";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">NFT Marketplace Demo</h1>
      <WalletConnect />
      <p className="mt-4 text-gray-700 max-w-lg">
        This is a demo NFT marketplace with <b>lazy minting</b>, built using
        Next.js, TypeScript, and Solidity. Integrates with MetaMask via
        Ethers.js.
      </p>
    </div>
  );
}
