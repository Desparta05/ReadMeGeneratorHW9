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