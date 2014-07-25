/**
 * @file ${title} 列表构造
 * 
 * @author ${username} (${email})
 */
define(function (require) {
    var random = require('random');
    var BizList = require('lib/BizList');

    var itemStructure = {
        winfoid: function () {
            return random.int(1000, 10000);
        },
        showword: function () {
            return random.words(10, 30);
        }
    };

    return BizList.create({
        id: '${moduleName}',
        itemStructure: itemStructure,
        pageNo: 1,
        sortOrder: 'desc',
        totalCount: 120
    });
});