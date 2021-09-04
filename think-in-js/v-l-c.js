var varVariable = 'confused var';

console.log(varVariable);

if (true) {
    var varVariable = 'This is var';
}

console.log(varVariable);


if (true) {
    let letVariable = 'This is let';
    letVariable = 'This is let again';
    console.log(letVariable);
}


if (true) {
    const constVariable = 'This is const variable';
    constVariable = 'This is const again';  // this is impossible

    const constVariable2 = {
        name: 'JavaScript',
        id: 2015
    };
    constVariable2.name = 'js';  // this is possible

    console.log(constVariable2); 
}


var a = 6;
function myFunc() {
    var b = 8;
    console.log(b);
}