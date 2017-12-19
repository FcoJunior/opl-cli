const colors = require('colors');

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

/**
 * @function [logError]
 * @param {String} message 
 */
const logError = message => {
    console.log(message.error);
};

module.exports = { logError };