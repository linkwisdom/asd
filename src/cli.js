var path = require('path');
var conser = require('conser');
var env = require('loconf');
var asd = require('./index');
var files = require('./files');
var bcs = require('./bcs');

env.use('asd');

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
        return env.getContext('asd');
    },
    bcs: function (ackey, sckey) {
        ackey && env.set(ackey, ackey);
        sckey && env.set(sckey, sckey);
        return bcs.login(env.getContext('asd'));
    },
    push: function (filename, rfile) {
        bcs.push(filename, env.getContext('asd'), rfile);
        return filename;
    },
    pull: function (rfile, lfile) {
        bcs.pull(rfile, env.getContext('asd'), function (content) {
            files.save(lfile || rfile, content);
        });
        return rfile;
    },
    dir: function (pathname) {
        bcs.list(pathname || '/', env.getContext('asd'));
        return pathname;
    },
    save: function (filename, content) {
        return files.save(filename, content);
    },
    // 列出目标文件的文件列表
    ls: function (dir) {
        dir = dir || './';
        return files.ls(dir).join('\n');
    },
    cd: function (dir) {
        return files.cd(dir);
    },
    rmdir: function (pathname) {
        return files.rmdir(pathname);
    },
    rm: function (filename) {
        return files.rm(filename);
    },
    cat: function (filename) {
        return files.cat(filename);
    },
    mkdir: function (dir) {
        return files.mkdirp(dir);
    },
    module: function (dir) {
        var batch = env.get('module-files');
        if (batch) {
            batch = batch.split(/[\s,]/) || [];

        } else {
            batch = [
                'Action', 'Model', 'View',
                'config', 'service', 'style.less',
                'monitor', 'template.tpl', 'actionConf'
            ];
        }

        batch.unshift(dir);
        return cli.touch.apply(cli, batch);
    },
    // 增加以文件
    touch: function (dir) {

        var list = Array.prototype.slice.call(arguments, 1);
        var leadFile = dir.match(/\w+\.\w{2,5}$/);

        if (leadFile && leadFile[0]) {
            leadFile = leadFile[0];

            if (dir == leadFile) {
                dir = './';
            } else {
                dir = dir.replace('/' + leadFile, '');
            }
            
            list.unshift(leadFile);
        }

        dir = path.resolve(process.cwd(), dir);
        var pwd = files.mkdirp(dir);

        var context = env.getContext('asd');
        return list.map(function (item) {
            var path = asd.touch(item, context, pwd);
            return path.replace(process.cwd(), '.');
        }).join('\n');
    },
    start: function () {
        return conser.start();
    }
};

conser.include(cli);

var argv = process.argv;

if ( argv.length > 2 ) {
    var cmd = argv[2];
    var args = Array.prototype.slice.call(argv, 3);

    if (cli.hasOwnProperty(cmd)) {
        var result = cli[cmd].apply(cli, args);
        console.log(result);
    }
} else {
    conser.start();
}

module.exports = cli;