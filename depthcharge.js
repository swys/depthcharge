var path = require('path');

module.exports = function Depthcharge(root, subDir) {
    var depth = 0,
        base = path.resolve(root).split(path.sep);
        dive = path.resolve(subDir).split(path.sep);
    base = base.splice(1, base.length);
    dive = dive.splice(1, dive.length);
    var level = dive;
    if (base === dive) {
        return depth;
    }
    base.forEach(function(part, i) {
        //console.log("Part :",part);
        //console.log("Level :",level[i]);
        if (part !== level[i]) {
            return -1;
        }
    });
    depth = level.length - base.length;
    return depth;
};


