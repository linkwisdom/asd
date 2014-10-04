var fs = require('fs');
var template = require('etpl');
var path = require('path');

var baseDir = process.cwd();

//console.log(template.filters);

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

exports.brs = function (files, context, pwd) {
    var file = files;
console.log(files);

    if (typeof files !== 'string' && files.length > 0) {
        file = files[0];
        files.forEach(function (file) {
            exports.brs(file, context, pwd);
        });
    }

    console.log(file);

    // 如果文件路径未指定后缀，强制添加`.js`后缀
    if (file.lastIndexOf('.') == -1) {
        file = file + '.js';
    }

    var targetFile = path.resolve( pwd || process.cwd(), file );

    // 解决windows路径问题
    targetFile = targetFile.replace(/\\/g, '/');

    if (!fs.existsSync(targetFile)) {
        return;
    }

    // context 为模板上下文数据
    context = context || {};
    context.filename = file;
    context.content = fs.readFileSync(targetFile).toString('utf8');

    // 如果用户没有指定模板目录，则采用项目默认模板
    var tplDir = context.tplDir || path.join(__dirname, 'template');
    var tpl = readTpl('brs.js', tplDir);

    var content = context.content;

    // 避免多次打包
    if (context.content && context.content.indexOf('define(') == -1) {
        content = this.render(context, tpl);
    }

    fs.writeFileSync(targetFile, content );
    return targetFile;
};


