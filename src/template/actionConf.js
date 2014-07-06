/**
 * @file ${title}
 * 
 * @author ${username} ( ${email} )
 */
define(function (require) {
    /**
     * 当前模块配置
     * 
     * @type {Object}
     */
    var actionConf =   [
        // {
        //     path: '/module/app/appCenter',
        //     type: 'module/app/appCenter/Action'
        // }
    ];

    /**
     * 子模块配置列表
     * 
     * 请在此处列出所有需要注册的Action配置
     */
    var list = [
        actionConf,
        // require('module/app/actionConf')
    ];
    
    // 子元素为数组时，调用公共方法合并
    return require('common/util').mergeActionConf(list);
});
