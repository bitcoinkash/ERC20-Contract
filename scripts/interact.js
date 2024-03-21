const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const [signer] = await ethers.getSigners();

    // Load the contract ABI
    const abi = ["function update(string newMessage)"];

    // Get the deployed contract instance
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const contract = new ethers.Contract(contractAddress, abi, signer);

    // Call the update function to update the message
    const newMessage = "Hello, updated sepolia!";
    const tx = await contract.update(newMessage);
    await tx.wait();

    console.log("Message updated successfully to:", newMessage);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
