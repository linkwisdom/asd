/**
 * @file ${title} ${moduleName} Action
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
     * ${title} modelType
     *
     * @override
     */
    DerivedAction.prototype.modelType = Model;

    /**
     * ${title} viewType
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