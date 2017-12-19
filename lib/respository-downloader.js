const gitDownloader = require('download-git-repo');
const mkdirp = require('mkdirp');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
const { rmPath } = require('./exec');

/**
 * @function [download]
 * @param {String} path 
 * @param {String} source 
 */
const download = (path, source) => {
    mkdirp(path, err => {
        if (err) {
            console.error(err);
            return;
        };
        
        let spinner = ora({ text: 'Downloading template...', spinner: cliSpinners.bouncingBar });
        spinner.start();
        gitDownloader(source, `./${path}`, err => {
            if (err) {
                rmPath(path);
                spinner.fail('Could not download template.');
                return;
            }

            spinner.succeed('Download completed!');
        });
    });
};

module.exports = { download };