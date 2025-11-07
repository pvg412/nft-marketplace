"use client";
import AuctionCard from "../components/AuctionCard";

const mockAuctions = [
  {
    image: "https://picsum.photos/300?4",
    name: "Rare NFT #1",
    highestBid: "1.5",
    endsIn: "2h",
  },
  {
    image: "https://picsum.photos/300?5",
    name: "Rare NFT #2",
    highestBid: "0.9",
    endsIn: "45m",
  },
];

export default function Auction() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Live Auctions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockAuctions.map((auction, i) => (
          <AuctionCard key={i} {...auction} />
        ))}
      </div>
    </div>
  );
}
