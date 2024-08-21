const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate README content
const generateREADME = (answers) => `
# ${answers.title}

![License](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-blue.svg)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
\`\`\`
${answers.tests}
\`\`\`

## Questions
If you have any questions, please feel free to contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: [${answers.email}](mailto:${answers.email})
`;

// Function to prompt the user for input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is the application used?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license is your project under?',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ]);
};

// Function to initialize the app
const init = () => {
  promptUser()
    .then((answers) => {
      const readmeContent = generateREADME(answers);

      fs.writeFileSync('README.md', readmeContent);
      console.log('README.md has been generated successfully!');
    })
    .catch((error) => {
      console.error('Error generating README.md:', error);
    });
};

// Initialize the app
init();