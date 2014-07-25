/**
 * @file 一个新模块 列表数据
 *
 * @author Liandong Liu (liuliandong01@baidu.com)
 */
define(function (require, exports, module) {
    var tpl = require('lib/tpl');
    var infoBizList = require('./flappyList');
    var DEFAULT_LIST_PAGE_SIZE = 20;

    /**
     * 修改flappy
     * 
     * @param {string} path 请求路径，同文件名
     * @param {Object} params 请求参数
     * {
     *    pageNo: {number}, // 请求页号
     *    pageSize: {number}, // 单页条数
     *    sortField: {number}, // 排序字段
     *    sortOrder: {string} // desc | asc
     * }
     * @return {Object} 请求响应数据
     */
    module.exports = function (path, params) {
        var pageNo = params.pageNo || 0;
        var pageSize = params.pageSize || DEFAULT_LIST_PAGE_SIZE;
        infoBizList.setPageSize(pageSize);
        infoBizList.sort(params.sortField, params.sortOrder);

        var data = infoBizList.getPage(pageNo);
        var result = tpl.success();
        result.data = data;
        return result;
    };
});