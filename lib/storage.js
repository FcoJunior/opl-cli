const db = require('diskdb');

db.connect('./lib/db', ['templates']);

/**
 * @function [getAll]
 */
const getAll = () => {
    return db.templates.find();
};

module.exports = { getAll };