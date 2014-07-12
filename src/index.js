var fs = require('fs');
var path = require('path');
var template = require('etpl');

var baseDir = process.cwd();

function readTpl(filename, tplDir) {
    try {
        var filePath = path.resolve(tplDir, filename);
        var content = fs.readFileSync( filePath );
        content = content.toString('utf8');
        return content;
    } catch (ex) {
        return readTpl('module.js', __dirname + '/template');
    }
}

exports.render = function (context, tpl) {
    var render = template.compile(tpl);
    return render(context);
};

exports.getModuleId = function (filePath, baseDir) {
    baseDir = baseDir || '/src/';
    var srcIndex = filePath.indexOf('/src/');
    var moduleId = filePath;
    if ( srcIndex > -1 ) {
        srcIndex += baseDir.length;
        moduleId = moduleId.substr(srcIndex);
        moduleId = moduleId.replace(/\/\w+\.\w+$/, '');
    }
    return moduleId;
};

exports.touch = function (target, context, pwd) {
    var file = target || 'Action';

    if (file.lastIndexOf('.') == -1) {
        file = file + '.js';
    }

    context = context || {};

    var tplDir = context.tplDir || path.join(__dirname, 'template');
    var tpl = readTpl(file, tplDir);

    var content = this.render(context, tpl);
    file = path.resolve( pwd || process.cwd(), file );

    var moduleId = context.moduleId = exports.getModuleId(file);
    context.moduleDomId = moduleId.replace(/\//g, '-');

    // 模板中采用规则 <!---为合法标识
    content = content.replace(/\<\!\-\-\-/g, '<!--');

    fs.writeFileSync( file, content );
    return file;
};