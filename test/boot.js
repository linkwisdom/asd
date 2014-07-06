/**
 * @file 生成测试系统代码
 *
 * @author Liandong Liu (liuliandong01@baidu.com)
 * 
 * @usage:
 *     node boot.js
 */

var cli = require('asd/src/cli');

cli.mkdir('project/src');
cli.cd('project');

cli.set('title', '基础配置');
cli.touch('src/common/', 'initer');
cli.set('title', 'esl插件');
cli.touch('src/common/extension/esl', 'js', 'css');

cli.set('title', '概括页');
cli.module('src/entry/overview');

cli.set('title', '看排名');
cli.module('src/module/app/coreword');

cli.set('title', '商机包');
cli.module('src/module/app/business');