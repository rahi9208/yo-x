let AWS = require('aws-sdk');
let FUNC = require('./file');
exports.handler = function(event, context, callback) {


	callback(null,FUNC.func());
}