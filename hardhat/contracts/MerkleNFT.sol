//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";


contract MerkleNFT {

    bytes32 public merkleRoot = 0x1fbe8e17437522d0e4001144d23463c4a96cb7e2a036ea69f41e3ef27e3ece3e;

    mapping(address => bool) public whitelistClaimed;

    function whitelistMint(bytes32[] calldata _merkleProof) public {
        require(!whitelistClaimed[msg.sender], "Address has already claimed");

        require(MerkleProof.verify(_merkleProof, merkleRoot, keccak256(abi.encodePacked(msg.sender))), "Invalid proof");

        whitelistClaimed[msg.sender] = true;

        
    }

}
