# find-polyfill

<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/find-polyfill.png?branch=master)](https://travis-ci.org/Sylvain59650/find-polyfill)
![version](https://img.shields.io/npm/v/find-polyfill.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/find-polyfill.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/find-polyfill.svg)
![minified](https://img.shields.io/bundlephobia/min/find-polyfill.svg)
![license](https://img.shields.io/npm/l/find-polyfill.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/find-polyfill.svg)](http://hits.dwyl.com/Sylvain59650/find-polyfill)
</div>

Implements the find method on Array if not already implemented.

Need for Internet Explorer.

No need for Nodejs, Chrome & Firefox

Don't no about others browsers.

## References the script

    <script src="node_modules/find-polyfill/distrib/find-polyfill.min.js"></script>
## Example

    var arr=[0,1,2,3,4,5,6];

    arr.find(x=>x==5);  // 5

    // for IE, you must write something like this:
    arr.find(function(x) { return x===5;}) // 5

## License
The license is MIT

Author: [Sylvain Longepée](https://github.com/Sylvain59650)