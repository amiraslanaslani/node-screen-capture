var path = require("path");
var exec = require('child_process').exec;

exports.IMAGE_FORMAT_PNG = "png";
exports.IMAGE_FORMAT_JPG = "jpg";
exports.IMAGE_FORMAT_GIF = "gif";

var jarPath = path.join(__dirname, 'java-screen-capture','screenshot-capture.jar');
var defaultCommand = "java -jar '" + jarPath + "'";

function commandPreprate(width, height, format){
    var commandCopy = defaultCommand;
    commandCopy += " --width=" + width;
    commandCopy += " --height=" + height;
    if(format != null)
        commandCopy += " -e " + format;
    return commandCopy
}

function executeCommand(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

exports.captureAndSave = function(width, height, format, file){
    var command = commandPreprate(width, height, format);
    command += " -o " + file;
    return executeCommand(command,function(out){});
}

exports.captureAndGetStream = function(width, height, format, callback){
    var command = commandPreprate(width, height, format);
    command += " -s";
    executeCommand(command,callback);
}

exports.captureAndGetBase64 = function(width, height, format, callback){
    var command = commandPreprate(width, height, format);
    command += " -b";
    executeCommand(command,callback);
}
