var uuid = require('uuid');

exports.generate = function() {
    return uuid.v4().replace(/-/g, '').substr(0, 24);
};
