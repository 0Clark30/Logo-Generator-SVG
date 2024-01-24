const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "Type 3 Characters for your Logo (no more than 3, e.g., 'TLC')",
    name: "text",
  },
  {
    type: "input",
    message:
      "What text color do you want for the Characters in your Logo (use color name or hexadecimal number)?",
    name: "textColor",
  },
  {
    type: "list",
    message: "Choose a shape for your Logo:",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message:
      "What color do you want for your shape (use color name or hexadecimal number)?",
    name: "shapeColor",
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

module.exports = promptUser;
