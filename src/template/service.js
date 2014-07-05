/**
 * ajax - service 定义
 *
 * @author ${username} (${email})
 */
define( function (require, exports) {
    var extendedAjax = require('library/framework/service/extendedAjax');
    
    /**
     * 请求数据部分
     * 
     * @param {string} path path参数
     * @param {string} params params参数
     * @return {Deferred}
     */
    function request(path, params) {
        var options = {
            data: {
                params: params || {}
            }
        };

        return extendedAjax.request(path, options)
            .then(function (result) {
                var response = result.getResponse();
                return response.data;
            });
    }

    /**
     * 获取文字提示信息
     *
     * @param {Object} params 请求参数
     * {
     *     word: '左侧排名'
     * }
     * @return {Deffered}
     */
    exports.getNoun = function (params) {
        return request('GET/noun', params);
    };
});