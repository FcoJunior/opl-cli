const exec = require('child_process').exec;

/**
 * @function [rmPath]
 * @param {String} path
 */
const rmPath = path => {
    exec(`rm -r ${path}`, (error, stdout, stderr) => { });
}

module.exports = { rmPath };