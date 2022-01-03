//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";


contract MerkleNFT {

    bytes32 public merkleRoot = 0x75a4ea0bea56ac457ce5dc3e1a50f7a4cc5f42f6b6ea7106fcf6df56e37515a0;

    mapping(address => bool) public whitelistClaimed;

    function whitelistMint(bytes32[] calldata _merkleProof) public {
        require(!whitelistClaimed[msg.sender], "Address has already claimed");

        require(MerkleProof.verify(_merkleProof, merkleRoot, keccak256(abi.encodePacked(msg.sender))), "Invalid proof");

        whitelistClaimed[msg.sender] = true;

        
    }

}
