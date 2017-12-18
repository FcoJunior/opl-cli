#! /usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const gitDownloader = require('download-git-repo');
const mkdirp = require('mkdirp');
const figlet = require('figlet');
const exec = require('child_process').exec;
const colors = require('colors');
const ora = require('ora');
const cliSpinners = require('cli-spinners');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

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

program
    .version('0.1.0')
    .description('On-Demand Project Launch')
    .action(command => {
        console.log(`unrecognized command: '${command}'`.error);
    });

program
    .command('new [name]')
    .option('-u, --url, [url]', 'URL from Git repository')
    .option('-b, --branch, [branch]', 'Branch from Git repository')
    .description('start a new project')
    .action((name, command) => {
        figlet('O P L', (err, data) => {
            console.log(data);
            if (name === undefined) {
                let questions = [q_name, q_listTemplate];
                prompt(questions).then(responses => {
                    _download(responses.name, responses.template);
                });
            } else if (command.url === undefined) {
                let questions = [q_listTemplate];
                prompt(questions).then(responses => {
                    _download(name, responses.template);
                });
            } else if (command.url != undefined) {
                let source = `${command.url}`;
    
                if (command.branch != undefined) {
                    source += `#${command.branch}`;
                };
                
                _download(name, source);
            } 
        });
    });
    
var _download = (path, source) => {
    mkdirp(path, err => {
        if (err) {
            console.error(err);
            return;
        };
        
        let spinner = ora({ text: 'Downloading template...', spinner: cliSpinners.bouncingBar });
        spinner.start();
        gitDownloader(source, `./${path}`, err => {
            if (err) {
                _rmPath(path);
                spinner.fail('Could not download template.');
                return;
            }

            spinner.succeed('Download completed!');
        });
    });
};

var _rmPath = path => {
    exec('rm -r testr', (error, stdout, stderr) => { });
}

program.parse(process.argv);