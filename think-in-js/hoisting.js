var a;
console.log(a);
a = 'JavaScript Developer'
console.log(a);


console.log(b);
let b = 'Frontend Developer';

let a;
console.log(a);
a = undefined;
a = 'Bangladesh';

let x;  // x = undefined
console.log(x);


var LANGUAGE = 'Dart';
var language = 'JavaScript';

function getLanguage() {
    if (!language) {
        var language = LANGUAGE;
    }
    return language;
}

console.log(`I love ${getLanguage()}`);


myFunc();
function myFunc() {
    console.log(`I love JavaScript`);
}


function helloFunc() {
    language = 'JavaScript';
    var language;
    console.log(language);
}

helloFunc();



hoistingFunc();
const  hoistingFunc = function() {
    language = 'JavaScript';
    var language;
    console.log(language);
}