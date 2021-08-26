var sum = function (num1, num2) {
    return num1 + num2;
}

console.log(sum(12, 15));


var num1 = 12;

var sum = function () {
    var num2 = 15;
    return function () {
        return num1 + num2;
    }
}

var myFunc = sum();
console.dir(myFunc);





function bankAccount(initialBalance) {
    var balance = initialBalance;
    return function () {
        return balance;
    }
}

var account = bankAccount(100000);

console.dir(account());





(function () {
    var num1 = 12;

var sum = function () {
    var num2 = 15;
        return num1 + num2;
}

console.dir(sum);
})();






(function () {
    var num1 = 12;
var num2 = 15;

var sum = function () {
        return num1 + num2;
}

console.log(sum());
console.dir(sum);

num1 = 10;
num2 = 8;

console.log(sum());
console.dir(sum);
})();






(function () {
    let num1 = 2;
    let num2 = 3;

    function sum() {
        return num1 + num2;
    }

    console.dir(sum);
})();






function stopWatch() {
    var startTime = Date.now();

    function getDelay() {
        console.log(Date.now() - startTime);
    }

    return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 10000000; i++) {
    var a = Math.random() * 1000000;
}

console.dir(timer);





var a;
function async() {
    a = 20;

    var myFunc = () => {
        console.log(a);
    }
    setTimeout(myFunc, 3000);

    console.dir(myFunc);
}

async();

a = 25;






for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000); 
}