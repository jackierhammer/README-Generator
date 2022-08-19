function template(data) {
    return `
# ${data.project_title}

## Description
    
${data.description}
    
## Table of Contents (Optional)
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}
    
## License
    
![badge](https://img.shields.io/badge/license-${data.license}-green)

    `;
};


module.exports = template;