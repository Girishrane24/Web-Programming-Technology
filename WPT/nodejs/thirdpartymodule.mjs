
import validator from 'validator';
import chalk from 'chalk';

let myName="";
console.log(validator.isEmpty(myName));
let friend="Rahul";
console.log(validator.isEmpty(friend));

let myemail="abc@gmail.com";
console.log(validator.isEmail(myemail));
let youremail="abcgmail.com";
console.log(validator.isEmail(youremail));

// use of chalk module 
console.log(chalk.bold("Sagar"));
console.log(chalk.bold.red("Sagar"));
console.log(chalk.bold.red.bgCyan("Sagar"));

//   how to create chalk function 
let danger = chalk.bgRed.white.italic;
let success = chalk.bgGreen.white.bold;

console.log(danger(" somthing went wrong"));
console.log(success(" You Don it!"));

