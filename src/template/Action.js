/**
 * @file ${title}
 * 
 * @author ${username} (${email})
 */
define(function (require) {
    var util = require('common/util');
    var Action = require('er/Action');
    var Model = require('./Model');
    var View = require('./View');
    var monitor = require('./monitor');

    /**
     * ${title} Action
     *
     * @extends Action
     * @constructor
     */
    var DerivedAction = util.derive(Action);

    /**
     * ${title} ModelType
     *
     * @override
     */
    DerivedAction.prototype.modelType = Model;

    /**
     * ${title} ViewType
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

        // 点击取消
        view.on('cancel', this.close, this);

        // 点击确定
        view.on('ensure', this.complete, this);
    };

    /**
     * 取消或关闭退出
     * 
     * @public
     */
    DerivedAction.prototype.close = function () {
        this.fire('close');
    };

    /**
     * 完成所有操作
     * 
     * @public
     * @param {Object} data 请求响应数据
     */
    DerivedAction.prototype.complete = function (data) {
        this.fire('complete', {data: data});
    };

    /**
     * 监控DerivedAction行为
     */
    monitor.watch(DerivedAction);
    
    return DerivedAction;
});