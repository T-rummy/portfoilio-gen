const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const Choice = require('inquirer/lib/objects/choice');
const markDown1 = require('./utils/generateMarkdown');


const questions = 
    [{ 
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project'

    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide a description of how to install this project'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide a description of how this application is used'

    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide any details on how someone can contribute to this project'

    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions for how to test this application'

    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'would you like to include a license in your readme',
        choices: ['None', 'Apache_License_2', 'GNU_General_Public_License_v3',
                  'MIT_License', 'BSD_2_Clause_Simplified_License', 'BSD_3_Clause_New_or_Revised_License',
                  'Boost_Software_License_1', 'Creative_Commons_Zero_v1_Universal', 'Eclipse_Public_License_2',
                  'GNU_Affero_General_Public_License_v3', 'GNU_General_Public_License_v2', 'GNU_Lesser_General_Public_License_v3',
                  'Mozilla_Public_License_2', 'The_Unlicense']


    },
    {
    type: 'input',
    name: 'github',
    message: 'Provide Github link'

    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email'

    },];

// TODO: Create a function to write README file
//  const writeToFile = (fileName, data)  =>{
//     const markDown = generateMarkdown(data)
//     return fs.writeFile('README.md', markDown , (err) => {
//          if (err) throw err;
//          console.log("Your file has been created");
//      })
//  }

// TODO: Create a function to initialize app
 const init = () => {
     return inquirer.prompt(questions)
     .then((data) => {
        const markDown =  markDown1.generateMarkdown(data)
         fs.writeFile('README.md', markDown , (err) => {
             if (err) throw err;
             console.log("Your file has been created");
         })
    })
     .catch((err) => {
         console.log(err);
     })
    
 }

// Function call to initialize app
init()
//   .then(writeToFile);