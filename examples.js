const { program } = require("commander");
const inquirer = require("inquirer");
const fs = require("fs");

program.version("1.0.0").description("A simple cli program");

//[Plain commander]
program.command("greet <name>").action((name) => console.log(`Hi ${name}`));

//[Commander + Inquirer]
program.command("start").action(async () => {
  const prompt = inquirer.createPromptModule();
  const answer = await prompt([
    { name: "username", message: "What is your name?", type: "input" },
    {
      name: "experience",
      message: "How many years of experience do you have?",
      type: "list",
      choices: ["1-3", "3-5", "5-10", ">10"],
    },
  ]);
  console.log(`Hi ${answer.username} you have ${answer.experience} years of experience.`);
});

//[Creating files]
program.command("create <filename>").action(async (filename) => {
  const prompt = inquirer.createPromptModule();
  const answer = await prompt([{ name: "fileContent", message: "Write the file content here.", type: "input" }]);
  fs.promises.writeFile(filename, answer.fileContent);
  console.log(`Your file is created succesefully.`);
});

program.parse(process.argv);
