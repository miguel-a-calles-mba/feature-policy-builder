'use strict';

const decamelize = require('decamelize');

module.exports = (directives = {}) => {
    return Object.keys(directives)
        .map((k) => `${decamelize(k, '-')} ${directives[k].join(' ')}`)
        .join('; ');
};
