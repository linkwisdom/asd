var fs = require('fs');
var path = require('path');
var mkdirp = require('./lib/mkdirp');

function isExists(file) {
    return fs.existsSync(file);
}

exports.ls = function ( cwd ) {
    cwd = cwd || './';
    if (!isExists(cwd)) {
        return [];
    }
    var files = fs.readdirSync( cwd );
    var list = [];
    files.forEach( function (file) {
        var pathname = path.join(cwd, file);
        var stat = fs.lstatSync(pathname);
        if (stat.isDirectory()) {
            list.push(file + '\t*');
        } else {
            list.push(file);
        }
    });
    return list;
};

exports.cd = function (dir) {
    try {
        process.chdir(dir);
        return process.cwd();
    } catch (ex) {
        return 'fail';
    }
};

exports.cdp = function (dir) {
    if (!fs.existsSync(dir)) {
        this.mkdirp(dir);  
    }
    
    process.chdir(dir);

    return process.cwd();
};

exports.mkdirp = function (pathname) {
    mkdirp.sync(pathname);
    return pathname;
};

exports.cat = function (filename) {
    try {
        var filePath = path.resolve(process.cwd(), filename);
        console.log(filePath);

        var content = fs.readFileSync( filePath );
        content = content.toString('utf8');
        return content;
    } catch (ex) {
        return 'not found the file';
    }
};