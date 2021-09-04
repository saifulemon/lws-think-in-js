'use strict';
var x = 15;

function myFunc() {
    var y = 10;
    x = 20;
    console.log(`${x} from myFunc`);
}
myFunc();

console.log(x);