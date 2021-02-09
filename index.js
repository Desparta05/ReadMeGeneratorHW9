// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const buildTemplate = require("./template");

const licenseList = [
    'MIT',
    'GPL-2.0',
    'Apache-2.0',
    'GPL-3.0',
    'BSD-3-clause',
    'Unlicense',
    'LGPL-3.0',
    'AGPL-3.0',
    'MPL-2.0',
    'BSL-1.0',
];

const colorChoices = ['red', 'blue', 'yellow', 'green', 'black'];

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    }, {
        type: 'input',
        message: 'What best describes your project?',
        name: 'description',
    }, {
        type: 'input',
        message: 'What are the instructions for installation  in your project?',
        name: 'instructions',
    },{
        type: 'input',
        message: 'Please enter a screenshot of your project..',
        name: 'screenshot',
    }, {
        type: 'input',
        message: 'What are the technologies you used for this project?',
        name: 'technologies',
    },{
        type: 'list',
        message: 'Select license used from list.',
        name: 'license',
        choices: licenseList,
    },{
        type: 'list',
        message: 'Which color would you like your license badge to be?',
        name: 'color',
        choices: colorChoices,
    },{
        type: 'input',
        message: 'Explain how the project is used..',
        name: 'usage',
    },{
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'Contribution',
    },{
        type: 'input',
        message: 'What is you Name?',
        name: 'Name',
    },{
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },{
        type: 'input',
        message: 'What is your Email Address?',
        name: 'email',
    
}];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFileSync('./README.md', readme);
    console.log('File was successfully written.');
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile(`${data.Title}.md`, generatorMarkdown(data));
    });

}

// function call to initialize program
init();