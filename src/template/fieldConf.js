/**
 * @file  - 定义看排名表格字段配置
 * 
 * @author Liandong Liu ( liuliandong01@baidu.com )
 */

define(function (require, exports) {
    var util = require('er/util');
    var etpl = require('etpl');
    
    exports = [
        {
            title: '单元出价',
            field: 'unitbid',
            sortable: true,
            minWidth: 120,
            width: 180,
            content: function (item) {
                return item.unitbid;
            }
        },
        {
            title: '关键词',
            field: 'showword',
            minWidth: 150,
            width: 180,
            content: function (item) {
                return item.showword;
            }
        }
    ];

    return exports;
});