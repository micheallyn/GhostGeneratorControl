var app = require('ghost-app'),
    _   = require('lodash'),
    path = require("path"),
    appRoot = path.resolve(__dirname),
    config = require(appRoot + '/config'),
    api;

generatorcontrol = app.extend({
    filters: {
        ghost_head: 'controlGenerator'
    },
    controlGenerator: function (headHtml) {
        if (config && config.mode == 'hide_version') {
            // Just hide Ghost version
            var newHtml = _.reject(headHtml, function (item) {
                return (/meta name="generator"/.test(item));
            });
            return _.union(newHtml, ['<meta name="generator" content="Ghost" />']);
        } else {
            // Hide all generator meta tag
            return _.reject(headHtml, function (item) {
                return (/meta name="generator"/.test(item));
            });
        }
    }
});


// Export to use
module.exports = generatorcontrol;