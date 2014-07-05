/**
 * @file ${title} 监控代码
 * 
 * @author ${username} ( ${email} )
 */

define(function (require) {
    var Monitor = require('common/Monitor');

    /**
     * 默认点击来源
     *
     * @const
     * @type {string}
     */
    var MONITOR_SOURCE = '${modulePath}';

    /**
     * 监控列表
     * 
     * @type {Object}
     */
    var watchList = {

    };

    return new Monitor(watchList);
});