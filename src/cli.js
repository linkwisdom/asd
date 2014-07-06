var path = require('path');
var conser = require('conser');
var env = require('loconf');
var asd = require('./index');
var files = require('./files');
var bcs = require('./bcs');

env.use('project');

var cli = {
    // 设置环境变量
    set: function (key, value) {
        env.set(key, value);
        return key + ' = ' + value;
    },
    // 获取环境变量
    get: function (key) {
        return env.get(key);
    },
    // 删除环境变量
    delete: function (key) {
        return env.remove(key);
    },
    // 批量输出环境变量集合
    dump: function () {
        return env.getContext('project');
    },
    bcs: function (ackey, sckey) {
        ackey && env.set(ackey, ackey);
        sckey && env.set(sckey, sckey);
        
        return bcs.login(env.getContext('project'));
    },
    put: function (filename) {
        bcs.put(filename);
        return filename;
    },
    // 列出目标文件的文件列表
    ls: function (dir) {
        dir = dir || './';
        return files.ls(dir).join('\n');
    },
    cd: function (dir) {
        return files.cd(dir);
    },
    cat: function (filename) {
        return files.cat(filename);
    },
    mkdir: function (dir) {
        return files.mkdirp(dir);
    },
    module: function (dir) {
        return cli.touch(
            dir,
            'Action', 'Model', 'View',
            'config', 'service', 'style.less',
            'monitor', 'template.tpl'
        );
    },
    // 增加以文件
    touch: function (dir) {
        dir = path.resolve(process.cwd(), dir);


        var pwd = files.mkdirp(dir);

        console.log(pwd);

        var context = env.getContext('project');

        return Array.prototype.slice.call(arguments, 1)
            .map(function (item) {
                asd.touch(item, context, pwd);
                return item;
            }).join('\n');
    },
    start: function () {
        return conser.start();
    }
};

conser.include(cli);

module.exports = cli;