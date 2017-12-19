const db = require('diskdb');

db.connect('./lib/db', ['templates']);

/**
 * @function [showList]
 */
const showList = () => {
    console.log(db.templates);
};

module.exports = { showList };