/**
 * @file ${title} Model
 * 
 * @author ${username} (${email})
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
     * ${title} ModelType
     *
     * @extends {UIModel}
     */
    var DerivedModel = util.derive('ef/UIModel');

    /**
     * ${title} 预加载数据
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