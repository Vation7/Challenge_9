const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'test',
    message: 'Is Inquirer working?',
  },
])
.then((answers) => {
  console.log('Your answer:', answers.test);
})
.catch((error) => {
  console.error(error);
});