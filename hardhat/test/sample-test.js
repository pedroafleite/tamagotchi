const { expect } = require("chai");
const { ethers } = require("hardhat");

// Run before every test
// - assign contract
// - Mint
// Create address



describe("Greeter", function () {
  // mint
  // uri
  // passtime
  // feed
  // play
  // image
  // name
  // check upkeep
  // perform upkeep
  
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
