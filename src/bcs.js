var fs = require('fs');
var path = require('path');

var bcsStat = 0;

exports.login = function (context) {
    var BCS = require('./lib/bcs');
    exports.bcs = BCS.createClient({
        accessKey: context.ackey,
        secretKey: context.sckey
    });
    bcsStat++;
};

exports.push = function ( filename , context, rfile ) {
    if (!exports.bcs && context) {
        exports.login(context);
    }

    var source = path.resolve(process.cwd(), filename);

    exports.bcs.putObject({
        bucket: 'my-file',
        object: rfile || filename,
        source: source
    }, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(result.body);
        }
    });
};

exports.pull = function ( filename, context, callback ) {
    if (!exports.bcs && context) {
        exports.login(context);
    }

    var source = path.resolve(process.cwd(), filename);

    exports.bcs.getObject({
        bucket: 'my-file',
        object: filename,
        source: source
    }, function (error, result) {
        callback && callback(error || result.body);
    });
};

exports.list = function ( pathname, context ) {
    if (!exports.bcs && context) {
        exports.login(context);
    }

    var source = path.resolve(process.cwd(), pathname);

    exports.bcs.listObject({
        bucket: 'my-file',
        object: pathname,
        source: source
    }, function (error, response) {

        if (error) {
            console.log(error);
        } else if (response && response.body) {
            var list = response.body.object_list;

            var result = list.map(function (item) {
                return item.object;
            });
            result.sort();
            console.log( JSON.stringify(result, '\t', 4) );
        } else {
            console.log( JSON.stringify(response, '\t', 4) );
        }
    });
};