depthcharge
===========

depthcharge is a function that will take in a root directory and a
subdirectory as arguments and output an integer depth. The depth represents how
deeply nested the subdirectory is as compared to the root directory.

For example if `tmp/` is the root and `tmp/hello` is the subdirectory then the returned value would be `1`.
If there is an error it will return -1.

install
=======

```
npm install depthcharge
```
usage
=====

```
var depthcharge = require('../depthcharge.js'),
    root = '../',
    sub = './',
    result = depthcharge(root, sub);

console.log("Result :",result);
});
```

The above code outputs `1` as the result.

*Note : This function will not throw if there is an error, it will return `-1`.*

test
====

```
npm test
```

Check the test directory for some more examples. You'll find a test that creates dirs 20 deep!

license
=======

MIT
