var depthcharge = require('../depthcharge.js'),
    root = process.argv[2] || '../',
    sub = process.argv[3] || './',
    test = require('tape');

test('get depth of dir nested 1 level deep', function(t) {
    t.plan(1);
    var result = depthcharge(root, sub);
    t.equal(result, 1);
});
