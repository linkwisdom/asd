/**
 * @file 一个新模块 flappyAction
 * 
 * @author Liandong Liu (liuliandong01@baidu.com)
 */
define(function (require) {
    var util = require('common/util');
    var datasource = require('er/datasource');
    var service = require('./service');

    /**
     * 静默更新
     *
     * @const
     * @type {Object}
     */
    var OPT_SILENT = { silent: true };

    /**
     * 一个新模块 ModelType
     *
     * @extends {UIModel}
     */
    var DerivedModel = util.derive('ef/UIModel');

    /**
     * 一个新模块 预加载数据
     * 
     * @type {Object}
     */
    DerivedModel.prototype.datasource = {

    };

    /**
     * Model 预处理
     * 
     * @override
     */
    DerivedModel.prototype.prepare = function () {

    };
        
    return DerivedModel;
});