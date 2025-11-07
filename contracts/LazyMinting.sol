// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LazyMintNFT is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;
    mapping(bytes32 => bool) public usedVouchers;

    constructor() ERC721("LazyMintNFT", "LMNFT") {}

    struct NFTVoucher {
        address recipient;
        string uri;
        bytes signature;
    }

    function verifyVoucher(NFTVoucher memory voucher) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(voucher.recipient, voucher.uri));
    }

    function lazyMint(NFTVoucher memory voucher) external {
        bytes32 hash = verifyVoucher(voucher);
        require(!usedVouchers[hash], "Voucher already used");

        usedVouchers[hash] = true;
        nextTokenId++;
        _safeMint(voucher.recipient, nextTokenId);
        _setTokenURI(nextTokenId, voucher.uri);
    }
}
