"use client";
import NFTCard from "../components/NFTCard";

const mockNFTs = [
  { image: "https://picsum.photos/300?1", name: "Art #1", price: "0.2" },
  { image: "https://picsum.photos/300?2", name: "Art #2", price: "0.4" },
  { image: "https://picsum.photos/300?3", name: "Art #3", price: "0.8" },
];

export default function Collection() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My NFT Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockNFTs.map((nft, i) => (
          <NFTCard key={i} {...nft} />
        ))}
      </div>
    </div>
  );
}
