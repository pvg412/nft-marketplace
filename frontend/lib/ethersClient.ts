import { ethers } from "ethers";
import LazyMintNFT from "../../artifacts/contracts/LazyMintNFT.sol/LazyMintNFT.json";

export const getContract = (address: string) => {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("MetaMask not detected");
  }
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(address, LazyMintNFT.abi, signer);
};
