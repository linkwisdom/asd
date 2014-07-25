/**
 * @file 一个新模块 flappyView
 * 
 * @author Liandong Liu (liuliandong01@baidu.com)
 */
define(function (require) {
    var util = require('common/util');
    var UIView = require('ef/UIView');
    require('etpl/tpl!./template.tpl');

    /**
     * 一个新模块 ViewType
     *
     * @constructor
     * @extends {UIView}
     */
    var DerivedView = util.derive(UIView);
    
    /** 
     * 一个新模块 模板
     *
     * @override
     */
    DerivedView.prototype.template = 'app-flappy';

    /** 
     * UI属性设置
     * 
     * @override
     * @type {Object}
     */
    DerivedView.prototype.uiProperties = {
        // uiProperties
    };

    /** 
     * UI事件定义
     *
     * @override
     * @type {Object}
     */
    DerivedView.prototype.uiEvents = {
        // uiEvents
    };

    /**
     * 视图内查找元素
     *
     * @param {string} selector 选择器字符串
     * @return {NodeList}
     */
    DerivedView.prototype.find = function (selector) {
        return $(this.getContainerElement()).find(selector);
    };
    
    return DerivedView;
});
