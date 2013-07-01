var exec = require('cordova/exec');

module.exports = {
    initContext: function (value) {
        exec('bbui', 'initContext', { value: value } ); 
    }
}
