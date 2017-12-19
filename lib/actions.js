const { download } = require('./respository-downloader');
const { prompt } = require('inquirer');
const { getAll } = require('./storage');

const q_name = {
    type: 'input',
    name : 'name',
    message : 'Project name:'
};

const q_listTemplate = {
    type: 'list',
    choices: [
        {
            name: 'ASP.NET API',
            short: '.NET API',
            value: 'bitbucket:fcojunr_backup/club-life-api'
        },
        {
            name: '.Net Core API',
            short: 'Core API',
            value: 'FcoJunior/ddd-workflow'
        },
        {
            name: 'Angular 5 Application',
            short: 'Angular',
            value: 2
        },
        {
            name: 'Ionic Application',
            short: 'Ionic',
            value: 3
        }
    ],
    name : 'template',
    message : 'Template project:'
};

/**
 * @function [captureTemplate]
 * @param {String} name 
 * @param {*} responses 
 */
const captureTemplate = (name, responses) => {
    if (name === undefined) {
        let questions = [q_name, q_listTemplate];
        prompt(questions).then(responses => {
            download(responses.name, responses.template);
        });
    } else if (command.url === undefined) {
        let questions = [q_listTemplate];
        prompt(questions).then(responses => {
            download(name, responses.template);
        });
    } else if (command.url != undefined) {
        let source = `${command.url}`;

        if (command.branch != undefined) {
            source += `#${command.branch}`;
        };
        
        download(name, source);
    }
};

/**
 * @function [showTemplates]
 */
const showTemplates = () => {
    console.log(getAll());
}

module.exports = { captureTemplate, showTemplates };