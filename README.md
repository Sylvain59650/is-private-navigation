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

## Works for IE11, Edge 17, FireFox 68, Chrome 76, Safari

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

## For IE 11,
you need to load script to define Promise polyfill

<script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.5.0/bluebird.min.js"></script>


## Test Online
[click here](https://sylvain59650.github.io/is-private-navigation/)

## License
The license is MIT

Author: [Sylvain Longepée](https://github.com/Sylvain59650)