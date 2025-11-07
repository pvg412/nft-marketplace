"use client";
import React from "react";

type Props = {
  image: string;
  name: string;
  highestBid: string;
  endsIn: string;
};

export default function AuctionCard({
  image,
  name,
  highestBid,
  endsIn,
}: Props) {
  return (
    <div className="border rounded-2xl p-3 shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="rounded-xl w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-500">Highest bid: {highestBid} ETH</p>
      <p className="text-sm text-gray-400">Ends in {endsIn}</p>
    </div>
  );
}
