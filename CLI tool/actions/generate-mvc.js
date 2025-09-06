//[Imports]
const fs = require("fs");
const path = require("path");
const config = require("../config/config");
const { promptInput } = require("../utils/prompt");
const { clone } = require("../utils/git");
const { runCommand } = require("../utils/runner");
const { generateFile } = require("../utils/file");
const { generateEnvContent } = require("../utils/content");

module.exports = async () => {
  const answer = await promptInput([{ name: "projectName", message: "What is the project name?", type: "input" }]);
  const projectPath = path.join(process.cwd(), answer.projectName);
  if (fs.existsSync(projectPath)) {
    console.log(`${answer.projectName} already exists`);
    return;
  }
  try {
    //cloning from repository
    await clone(config.repoUrl, answer.projectName);

    //installing dependencies
    const npmCommand = process.platform == "win32" ? "npm.cmd" : "npm";
    await runCommand(npmCommand, ["install"], { cwd: projectPath, shell: true });

    //generating .env file
    const filePath = path.join(projectPath, ".env");
    await generateFile(filePath, generateEnvContent(answer.projectName));
  } catch (error) {
    console.log(error);
  }
};
