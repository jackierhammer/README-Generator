// This function takes the data collected by inquirer as a parameter and returns the content of the README
function template(data) {
    return `
# ${data.project_title}

## Description
    
${data.description}

![badge](https://img.shields.io/badge/license-${data.license}-green)

## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}

## Contributing

${data.contributing}

## Tests 

${data.tests}

## Questions

My GitHub Page: [${data.username}](https://github.com/${data.username})

If you have any questions, you can email me at ${data.email}

## License
    
This project is covered under the ${data.license} license. 

    `;
};

// Exports the template function so that in can be imported in index.js
module.exports = template;