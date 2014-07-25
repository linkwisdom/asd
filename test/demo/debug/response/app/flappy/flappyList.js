/**
 * @file 一个新模块 列表构造
 * 
 * @author Liandong Liu (liuliandong01@baidu.com)
 */
define(function (require) {
    var random = require('random');
    var BizList = require('lib/BizList');

    var itemStructure = {
        winfoid: function () {
            return random.int(1000, 10000);
        },
        showword: function () {
            return random.words(10, 30);
        }
    };

    return BizList.create({
        id: 'flappy',
        itemStructure: itemStructure,
        pageNo: 1,
        sortOrder: 'desc',
        totalCount: 120
    });
});