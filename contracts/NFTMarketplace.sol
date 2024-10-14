// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTMarketplace {
    IERC20 public usdtToken; // контракт USDT
    IERC721 public nftToken; // контракт NFT

    struct Listing {
        address seller;
        uint256 price;
    }

    mapping(uint256 => Listing) public listings;

    constructor(address _usdtAddress, address _nftAddress) {
        usdtToken = IERC20(_usdtAddress);
        nftToken = IERC721(_nftAddress);
    }

    function listNFT(uint256 tokenId, uint256 price) external {
        require(nftToken.ownerOf(tokenId) == msg.sender, "You don't own this NFT");
        require(nftToken.isApprovedForAll(msg.sender, address(this)), "Marketplace not approved");

        listings[tokenId] = Listing({
            seller: msg.sender,
            price: price
        });
    }

    function buyNFT(uint256 tokenId) external {
        Listing memory listing = listings[tokenId];
        require(listing.price > 0, "NFT not listed for sale");

        require(usdtToken.transferFrom(msg.sender, listing.seller, listing.price), "Payment failed");
        nftToken.safeTransferFrom(listing.seller, msg.sender, tokenId);

        delete listings[tokenId];
    }
}
