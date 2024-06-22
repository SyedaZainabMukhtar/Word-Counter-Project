import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgCyan("\n \t \t WORD COUNTER"));
console.log("=".repeat(60));
// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
// Triming a sentence and splicing into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//Analyse of your input sentence
console.log("=".repeat(60));
console.log(chalk.bold("-Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - WORD COUNT: ${chalk.bold.redBright(words.length)}`));
console.log("x".repeat(60));
