/**
 * @file 一个新模块 ER 路由配置
 * 
 * @author Liandong Liu (liuliandong01@baidu.com)
 */
define(function (require) {
    /**
     * 当前模块配置
     * 
     * @type {Object}
     */
    var actionConf = [
        {
            path: '/app/flappy',
            type: 'app/flappy/Action'
        }
    ];

    return actionConf;
});
