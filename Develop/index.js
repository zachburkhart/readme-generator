// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title for your project',
        validate: titleInput => {
          if (titleInput) {
              return true;
            } else {
              console.log('You need to enter a project title!');
              return false;
            }
        }
      },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'table-of-contents'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
