#! /usr/bin/env node
const program = require('commander');
const figlet = require('figlet');
const { captureTemplate } = require('./lib/actions');
const { logError } = require('./lib/log');
const { showList } = require('./lib/storage');

program
    .version('0.1.0')
    .description('On-Demand Project Launch')
    .action(command => {
        logError(`unrecognized command: '${command}'`);
    });

program
    .command('new [name]')
    .option('-u, --url, [url]', 'URL from Git repository')
    .option('-b, --branch, [branch]', 'Branch from Git repository')
    .description('start a new project')
    .action((name, command) => {
        figlet('O P L', (err, data) => {
            console.log(data);
            captureTemplate(name, command);
        });
    });

program
    .command('add-template <name> <url>')
    .description('Add a new model template to list OPL.')
    .action(() => {

    });

program
    .command('list-template')
    .description('Show all templates added on OPL.')
    .action(() => {
        showList();
    });

program.parse(process.argv);