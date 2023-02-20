const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const style = require('./src/template');

function createTeam() {
    inquirer
      .prompt([
        console.log('\nWelcome to the team builder'),
        {
          type: 'list',
          name: 'memberChoice',
          message: 'Which type of team member would you like to add?',
          choices: [
            'Manager',
            'Engineer',
            'Intern',
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
        case 'Manager':
            addManager();
        case 'Engineer':
            addEngineer();
            break;
        case 'Intern':
            addIntern();
            break;
        default:
            buildTeam();
        }
      });
  }
  function addEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the enineer's name?",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter a valid name';
            }
        }
    ])
  }
  console.log(createTeam)