#! usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number",
    type: "number",
  },
]);

if (pinAns.pin === myPin) {
  console.log("your pin is correct");

  let optionAns = await inquirer.prompt([
    {
      name: "option",
      message: "please select one option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (optionAns.option === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ])
    if (amountAns.amount <= myBalance){
      
      console.log(`your remaining balance is ${myBalance -= amountAns.amount}`)
    }
    else if (amountAns.amount >= myBalance){
      console.log("you have insufficient balance")
    }
  } else if (optionAns.option === "check balance") {
    console.log(myBalance);
  }
} else {
  console.log("incorrect pin code");
}
