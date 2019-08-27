# is-private-navigation

<div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/is-private-navigation.png?branch=master)](https://travis-ci.org/Sylvain59650/is-private-navigation)
![version](https://img.shields.io/npm/v/is-private-navigation.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/is-private-navigation.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/is-private-navigation.svg)
![minified](https://img.shields.io/bundlephobia/min/is-private-navigation.svg)
![license](https://img.shields.io/npm/l/is-private-navigation.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/is-private-navigation.svg)](http://hits.dwyl.com/Sylvain59650/is-private-navigation)
</div>

Detects Incognito Mode Navigation in browsers

## References the script

    <script src="node_modules/is-private-navigation/distrib/is-private-navigation.min.js"></script>
## Example

   isPrivateMode().then(function(isPrivate) {            
            if (isPrivate) {
                console.log("You are using Private Navigation");
            }
            else {
                console.log("You are using Normal Navigation Mode");
            }
        });

## License
The license is MIT

Author: [Sylvain Longepée](https://github.com/Sylvain59650)