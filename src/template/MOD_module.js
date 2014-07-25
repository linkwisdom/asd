/**
 * @file ${title} 修改${moduleName}操作
 * 
 * @author ${username} (${email})
 */
define(function (require, exports, module) {
    var tpl = require('lib/tpl');

    /**
     * 修改${moduleName}
     * 
     * @param {string} path 请求路径，同文件名
     * @param {Object} params 请求参数
     * {
     *    [描述请求参数]
     * }
     * @return {Object} 请求响应数据
     */
    module.exports = function (path, params) {
        // 建议修改物料
        // require('./${moduleName}List').set(params);
        return tpl.success();
    };
});