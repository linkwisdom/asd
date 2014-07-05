/**
 * @file ${title}
 * 
 * @author ${username} (${email})
 */
define(function (require) {
    var util = require('common/util');
    var UIView = require('ef/UIView');
    
    require('esui/Button');
    require('esui/TextBox');
    require('er/tpl!./template.tpl');

    /**
     * 常量配置
     * 
     * @type {Object}
     */
    var config = require('./config');

    /**
     * ${title} ViewType
     *
     * @constructor
     * @extends {UIView}
     */
    var DerivedView = util.derive(UIView);
    
    /** 
     * ${title} 模板
     *
     * @override
     */
    DerivedView.prototype.template = '${moduleDomId}';

    /** 
     * 修改计划预算属性设置
     * 
     * @override
     * @type {Object}
     */
    DerivedView.prototype.uiProperties = {

    };

    /** 
     * UI 事件定义
     *
     * @override
     * @type {Object}
     */
    DerivedView.prototype.uiEvents = {

    };

    /** 
     * 视图内查找元素
     *
     * @public
     * @param {NodeList}
     */
    DerivedView.prototype.find = function (selector) {
        return $(this.getContainerElement()).find(selector);
    };
    
    return DerivedView;
});
