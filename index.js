// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


inquirer
.prompt(
    [

        {
            type: 'input',
            message: 'Please give your project a title (Required)',
            name: 'title',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!');
                    return false;
                }
            }
        },
          
    ]
)