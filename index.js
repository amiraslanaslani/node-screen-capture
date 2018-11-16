var path = require("path");
var exec = require('child_process').execSync;

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

function executeCommand(command){
    return exec(command);
};

exports.captureAndSave = function(width, height, format, file){
    var command = commandPreprate(width, height, format);
    command += " -o " + file;
    return executeCommand(command);
}

exports.captureAndGetStream = function(width, height, format){
    var command = commandPreprate(width, height, format);
    command += " -s";
    return executeCommand(command);
}

exports.captureAndGetBase64 = function(width, height, format){
    var command = commandPreprate(width, height, format);
    command += " -b";
    return executeCommand(command);
}
