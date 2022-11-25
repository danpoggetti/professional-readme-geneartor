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

        {
            type: 'input',
            message: 'Please enter a description for your project (Required)',
            name: 'description',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },

        {
            type: 'checkbox',
            name: 'language',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },

    
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Do you want to enter some installation instructions for people?',
            default: false
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please enter your project installation instructions',
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Tell people how you can use your app'
        },

        {
            type: 'input',
            name: 'roadmap',
            message: 'Please enter some basic methods for how one can navigate your project'
        },

        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Do you want to tell people how to contribute to your project?',
            default: false
          },

        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter your how you want people to contribute to your project',
            when: ({ confirmContributing }) => {
                if (confirmContributing) {
                    return true;
                } else {
                    return false;
                }
            }
          },

          {
            type: 'confirm',
            name: 'confirmLicenseType',
            message: 'Do you want to add a license type?',
            default: false
          },

          {
            type: 'checkbox',
            name: 'licenseType',
            message: 'Please seelect a type of license for the app',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified License"', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
            when: ({ confirmLicenseType }) => {
                if (confirmLicenseType) {
                    return true;
                } else {
                    return false;
                }
            }
          },

        {
            type: 'input',
            message: 'Please enter the username associated with your GitHub (Required)',
            name: 'githubUsername',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: 'Please enter the email address associated with your GitHub account (Required)',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email associated with your GitHub account');
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAcknowledgements',
            message: 'Do you have any sources to credit?',
            default: false
          },

          {
            type: 'input',
            name: 'acknowledgements',
            message: 'Please enter the sources or fellow GitHub users you wish to credit',
            when: ({ confirmAcknowledgements }) => {
                if (confirmAcknowledgements) {
                    return true;
                } else {
                    return false;
                }
            }
          },
          
    ]
)


// questions are done, so let's show a then statement for our readme outline

.then (({

    title,
    description,
    language,
    installation,
    usage,
    roadmap,
    contributing,
    licenseType,
    githubUsername,
    email,
    acknowledgements

}) => {
    // now that the readme questions and .then statement are done, let's create our template to be used
    
    const template = `
# ${title}

![GitHub profile](https://img.shields.io/badge/Github-${githubUsername}-brightgreen)

    
*[Description](#description)
*[Usage](#usage)
*[Acknowledgements](#acknowledgements)
*[License](#license)
# Description
    ${description}
# Language
    ${language}
# Installation
    ${installation}
## Usage
    ${usage}
### Roadmap
    ${roadmap}
## Contributing
    ${contributing}
## License
    ${licenseType}
# Contact
* Github: ${githubUsername}
* e-mail: ${email}
## Acknowledgements
    ${acknowledgements}`;
    createNewFile(title, template);
});

// still have to write the function and file

function createNewFile(fileName, data){
    fs.writeFile(`./dist/${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log('There was a problem, please try again.')
        }
        console.log('Congratulations, your readme.md file has been created!');
    })
}
