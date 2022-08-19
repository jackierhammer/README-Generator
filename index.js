const inquirer = require('inquirer');
const fs = require('fs');

// Imports the function that creates the README file from template.js
const template = require('./template.js');

// Collects the data from the user using these prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'project_title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please type a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide the steps needed to install your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please explain how to use your project with examples.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please give instructions for how to contribute to your project.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please list any tests included in your project and give directions for how to use them.',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'list',
      message: 'Please select a license for you project.',
      name: 'license',
      choices: ['GPLv3', 'MIT', 'Apache'],
    },
  ])
  .then((data) => {
    // Writes the filled out template to a new README.md file and logs a message so the user knows if their file was successfully created or not
    fs.writeFile('README.md', template(data), (err) =>
      err ? console.log(err) : console.log('Your README has been generated.')
    );
  });