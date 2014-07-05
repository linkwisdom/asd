var fs = require('fs');
var path = require('path');

exports.login = function (context) {
    var BCS = require('./lib/bcs');
    exports.bcs = BCS.createClient({
        accessKey: context.ackey,
        secretKey: context.sckey
    });
};

exports.put = function ( filename ) {
    if (!exports.bcs) {
        return 'bcs not logined';
    }
    var source = path.resolve(process.cwd(), filename);

    exports.bcs.putObject({
        bucket: 'new-buck',
        object: filename,
        source: source
    }, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
        }
    });
}