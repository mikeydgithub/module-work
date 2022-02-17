var inquirer = require('inquirer');
var fs = require('fs');


inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "checkbox",
        name: "languages",
        message: "What languages do you know?",
        choices: ["HTML", "JAVA", "jQUERY", "CSS"]
    },
    {
        type: "checkbox",
        name: "communication",
        message: "What is your preferred method of communication?",
        choices: ["EMAIL", "PHONE", "SLACK", "SMOKESIGNAL", "MORSE CODE" ]
    }])

    .then((answers) => {
        const name = `${answers.name
            .toLowerCase()
            .split(' ')
            .join('')}.json`

        fs.writeFile(name, JSON.stringify(answers), err =>
        err ? console.log(err): console.log('sucess'))
    })
    // .catch((error) => {
    //     if (error.isTtyError) {
    //         // Prompt couldn't be rendered in the current environment
    //     } else {
    //         // Something else went wrong
    //     }
    // });