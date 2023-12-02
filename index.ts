console.log("Hello via Bun!");
import inquirer from "inquirer";

async function selectFromList(options: string[]): Promise<string> {
  const questions = [
    {
      type: "list",
      name: "selectedOption",
      message: "Select an option:",
      choices: options,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers.selectedOption;
}

async function main() {
  const options = ['Option1', 'Option2', 'Option3'];
  const selectedOption = await selectFromList(options);

  console.log(`You selected: ${selectedOption}`);
}

main();

