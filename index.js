const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./template.js');

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
      type: 'list',
      message: 'Please select a license for you project.',
      name: 'license',
      choices: ['GPLv3', 'MIT', 'Apache'],
    },
  ])
  .then((data) => {
    fs.writeFile('README.MD', template(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });