/**
 * @file 一个新模块 监控代码
 * 
 * @author Liandong Liu (liuliandong01@baidu.com)
 */
define(function (require) {
    var Monitor = require('common/Monitor');

    /**
     * 默认点击来源
     *
     * @const
     * @type {string}
     */
    var MONITOR_SOURCE = 'app_flappy';

    /**
     * 监控列表
     * 
     * @type {Object}
     */
    var watchList = {
        /**  
         * 进入Action监控
         * - source 是调用来源字段
         * 
         * @return {Object} 监控字段
         */
        initBehavior: function () {
            var source = this.model.get('source');
            return {
                source: source,
                target: 'enter_app_flappy'
            };
        },
        /**
         * 请求数据监控
         * 
         * @param {Object} e 事件参数
         * e.item 表示UI元素id
         * e.type 表示事件源名称
         * e.data 是事件传递的数据
         * 
         * @return {Object} 监控字段
         */
        query: function (e) {
            var target = e.item || e.type;
            return {
                source: MONITOR_SOURCE,
                target: target
            };
        }
    };

    return new Monitor(watchList);
});