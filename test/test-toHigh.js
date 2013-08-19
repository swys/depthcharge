var depthcharge = require('../depthcharge.js'),
    path = require('path'),
    test = require('tape'),
    root = process.cwd(),
    toHigh = path.resolve('../');

test('error out with a subDir that is a level higher', function(t) {
    t.plan(1);
    t.equal(depthcharge(root, toHigh), -1);
});



