const { MerkleTree } = require("merkletreejs");
const keccack256 = require('keccak256')

let whitelistAddresses = [
    "0x4a4fD96907e817565D74Cf384418b0885A53bbcD",
    "0xdAC13042229bB1EA919368eddA8A06d05bBA4560",
    "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
    "0xbE00E9aC7B3E867E8f8A2c652ac1fa60613f2a9C",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
]

const leafNodes = whitelistAddresses.map(addr => keccack256(addr))
const merkleTree = new MerkleTree(leafNodes, keccack256, { sortPairs: true})

const rootHash = merkleTree.getHexRoot()

console.log('Root', rootHash)

console.log('Whitelist Merkle Tree\n', merkleTree.toString())

const claimingAddress = leafNodes[4]

const hexProof = merkleTree.getHexProof(claimingAddress)

console.log('Merkle Proof for Address - ', whitelistAddresses[4], hexProof )