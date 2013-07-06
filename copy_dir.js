module.exports = function (grunt) { 
    var fs = require('fs-extra');
    fs.copy('/theme/', '/themedest/');
};