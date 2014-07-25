/**
 * @file 一个新模块 flappyAction
 * 
 * @author Liandong Liu (liuliandong01@baidu.com)
 */
define(function (require) {
    var util = require('common/util');
    var Action = require('er/Action');
    var Model = require('./Model');
    var View = require('./View');
    var monitor = require('./monitor');

    /**
     * 一个新模块 Action
     *
     * @extends Action
     * @constructor
     */
    var DerivedAction = util.derive(Action);

    /**
     * 一个新模块 ModelType
     *
     * @override
     */
    DerivedAction.prototype.modelType = Model;

    /**
     * 一个新模块 ViewType
     *
     * @override
     */
    DerivedAction.prototype.viewType = View;

    /**
     * 初始交互行为
     * 
     * @override
     */
    DerivedAction.prototype.initBehavior = function () {
        var view = this.view;
    };

    /**
     * 监控DerivedAction行为
     */
    monitor.watch(DerivedAction);
    
    return DerivedAction;
});