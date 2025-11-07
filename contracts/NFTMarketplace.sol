// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is Ownable {
    struct Listing {
        address seller;
        uint256 price;
    }

    mapping(address => mapping(uint256 => Listing)) public listings;

    event Listed(address indexed nft, uint256 indexed tokenId, address seller, uint256 price);
    event Sold(address indexed nft, uint256 indexed tokenId, address buyer, uint256 price);

    function listNFT(address nft, uint256 tokenId, uint256 price) external {
        IERC721 token = IERC721(nft);
        require(token.ownerOf(tokenId) == msg.sender, "Not owner");
        require(token.getApproved(tokenId) == address(this), "Marketplace not approved");

        listings[nft][tokenId] = Listing(msg.sender, price);
        emit Listed(nft, tokenId, msg.sender, price);
    }

    function buyNFT(address nft, uint256 tokenId) external payable {
        Listing memory item = listings[nft][tokenId];
        require(item.price > 0, "Not listed");
        require(msg.value >= item.price, "Insufficient ETH");

        delete listings[nft][tokenId];
        IERC721(nft).safeTransferFrom(item.seller, msg.sender, tokenId);
        payable(item.seller).transfer(item.price);

        emit Sold(nft, tokenId, msg.sender, item.price);
    }
}
