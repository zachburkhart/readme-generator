// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        name: 'installation',
        message: 'Please enter installation instructions.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to enter usage instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ["None of the above", "All of the above"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Can users contribute? If so, what should they do?',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('You need to enter contribute instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter testing instructions.',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to enter testing instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('You need to enter a username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You need to enter a repository name!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        return "File created!";
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(fileData => {
        return fileData;
    })
}

// Function call to initialize app
init()
.then(fileData => {
    console.log(fileData); 
    return generateMarkdown(fileData);
})
.then(generatedReadme => {
    return writeToFile('./generated-readme/generated-readme.md', generatedReadme);
})
.catch(err => {
    console.log(err);
});