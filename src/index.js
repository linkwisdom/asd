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

exports.getModuleId = function (filePath) {
    var bases = ['/src/', '/response/', '/'];
    do {
        var base = bases.shift();
        var srcIndex = filePath.indexOf(base);
    } while ( srcIndex == -1 && bases.length > 0);

    var moduleId = filePath;

    if ( srcIndex > -1 ) {
        srcIndex += base.length;
        moduleId = moduleId.substr(srcIndex);
        moduleId = moduleId.replace(/\/\w+\.\w+$/, '');
    }

    return moduleId;
};

exports.touch = function (target, context, pwd) {
    // 如果不指定文件名，默认为Action文件
    var file = target || 'Action';

    // 如果文件路径未指定后缀，强制添加`.js`后缀
    if (file.lastIndexOf('.') == -1) {
        file = file + '.js';
    }

    var targetFile = path.resolve( pwd || process.cwd(), file );

    // context 为模板上下文数据
    context = context || {};

    // moduleId 表示以src为基线的path; 除去去后缀部分
    var moduleId = context.moduleId = exports.getModuleId(targetFile);

    // moduleName 表示文件模块名
    context.moduleName = moduleId.substr(moduleId.lastIndexOf('/') + 1);

    // moduleDomId 用于表示less; tpl中的wrapperid
    context.moduleDomId = moduleId.replace(/\//g, '-');

    // monitorTag 表示监控Tag
    context.monitorTag = moduleId.replace(/\//g, '_').toLowerCase();

    // 如果用户没有指定模板目录，则采用项目默认模板
    var tplDir = context.tplDir || path.join(__dirname, 'template');
    var tpl = readTpl(file, tplDir);

    var content = this.render(context, tpl);

    // 模板中采用规则 <!---为合法标识
    content = content.replace(/\<\!\-\-\-/g, '<!--');

    // 如果文件名包含module字段，自动替换为moduleName
    targetFile = targetFile.replace('module', context.moduleName);

    fs.writeFileSync(targetFile, content );

    return targetFile;
};