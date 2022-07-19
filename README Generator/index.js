// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js');
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
            "ISC"
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

    const result = `
    # ${response.project}
    #### Github: ${response.github}
   Video https://drive.google.com/file/d/1ZLZb9HQn3iHuiIaAOPExyzabyC1WqNZk/view?usp=sharing
   

    ### Screenshot of end product:
    ![](./Readmescreenshot.JPG.png)

    ## Table of Contents

    1. [Github](#github)

    2. [Email](#email)

    3. [Description](#description)

    4. [License](#license)

    5. [Install](#install)

    6. [Testing](#test)

    7. [Repo](#repo)

    8. [Contribution](#contribution)
       
    ## Description: 
    ${response.description}
            
    ## Installation commands required:
    Use the following code in your code for installation:
    \`\`\`    
    - ${response.install}
    \`\`\`
    ## Testing information
    ${response.test}
    ## Repo
    ${response.repo}
    ##### Licensed with:
    ${response.license}
    ## Contributor:
    ${response.contribution}
    ## Email
    You can contact the creator with questions regarding the generator at ${response.email}
    `
    
   
    
   
    fs.writeFile("README.md", result, (err) =>
    err ? console.log(err) : console.log('Success!'))

  }
  )
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }
  
  module.exports = generateMarkdown;