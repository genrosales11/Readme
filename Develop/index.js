// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions =

    [

    {
      type: 'input',
      message: 'What is your project name?',
      name: 'title'
    },
    {
        type: "input",
        message: "Description for the project:",
        name: "description",
    },
    {
        type: "input",
        message: "Installation instructions for the project:",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage information for the project:",
        name: "usage",
    },
    {
        type: "input",
        message: "Contribution guidelines for the project:",
        name: "contribution",
    },
    {
        type: "input",
        message: "Test instructions for the project:",
        name: "test",
    },
    {
        type: "input",
        message: "Github Username:",
        name: "user",
    },
    {
        type: "input",
        message: "Email:",
        name: "email",
    },
    {
        type: "list",
        message: "What license are you using:",
        name: "license",
        choices: [
            "MIT",
            "ISC",
        ],
    },

]
inquirer.prompt(questions).then((response)=> {

    if (response.license === 'ISC') {
        response.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if (response.license === 'MIT') {
        response.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }

    const template = `# ${title}
    ${license}
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Test](#test)
    * [Questions](#Questions)
    * [License](#license)
    # Description
    ${description}
    # Installation
    ${installation}
    # Usage
    ${usage}
    # Contribution
    ${contribution}
    # Test
    ${test}
    https://github.com/${user}
    # Questions
    Contact me with any questions here
    My email: ${email}
    Visit my github: https://github.com/${user}
    # License
    ${detail}
    `;
    
        // starts and sends data to function
        createReadMe(template);
    }
    );
    
    // creates README with dynamic inputs based off users desires.
    function createReadMe(template) {
    
        fs.writeFile("README.md", template, function (err) {
            if (err) throw err, console.log("An error has stopped the file from being saved");
            console.log("Data Saved");
        });
    
    }
module.exports - generateMarkdown