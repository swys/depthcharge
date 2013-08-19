var depthcharge = require('../depthcharge.js'),
    mkdirp = require('mkdirp'),
    test = require('tape'),
    path = require('path'),
    fs = require('fs'),
    dirs = [],
    i,
    XXdeep,
    first;

for (i = 0; i < 20; i += 1) {
    dirs.push(randomHex());
}

first = dirs[0];

test('lets make a dir that has 20 sub directories', function(t) {
    t.plan(1);
    XXdeep = path.join(dirs.join(path.sep), path.sep);
    mkdirp(XXdeep, function(err) {
        if (err) {
            throw new Error("Something is really messed up!!!!",err);
        } else {
            t.equal(fs.statSync(XXdeep).isDirectory(), true);
        }
    });
});

test('lets see if depthcharge can verify 20 levels deep', function(t) {
    t.plan(1);
    t.equal(depthcharge(process.cwd(), XXdeep), 20);
});

test('lets clean up our mess', function(t) {
    t.plan(1);
    var bottom = stepDown(first);
    t.equal(stepUp(bottom), 0);
});

function stepUp(start) {
    var dir = start;
    function rising(target) {
        var levelUp = target;
        if (levelUp === '') {
            return 0;
        }
        fs.rmdirSync(levelUp);
        levelUp = levelUp.split(path.sep);
        levelUp.pop();
        levelUp = levelUp.join(path.sep);
        return rising(levelUp);
    }
    return rising(dir);
}

function stepDown(start) {
    var dir = start;   
    function step(target) {
        var test = fs.readdirSync(target);
        if (test.length === 0) {
            return dir;
        } else {
            dir = dir + path.sep + test;
            return step(dir);
        }
    }
    return step(dir);
}

function randomHex() {
    var letters = '0123456789ABCDEF',
        hex = '';
    for (var i = 0; i < Math.floor(Math.random() * 21 + 1); i += 1) {
        hex += letters[Math.round(Math.random() * 15)];
    }
    return hex;
}

