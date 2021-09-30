 function Person(name, age) {
    let person = Object.create(Person.prototype);
    console.log(person);
    person.name = name;
    person.age = age;
    person.study = 'Feni Computer Institute';

    person.eat = personMethods.eat;

    person.sleep = personMethods.sleep;
    return person;
}


function Person(name, age) {
    this = Object.create(Personwithnew.prototype);

    this.name = name;
    this.age = age;

    return this;
}

Person.prototype = {
    eat() {
        console.log(`${name} is eating`);
    },

    sleep() {
        console.log(`${name} is sleeping`);
    },
    
    play() {
        console.log(`${name} is a playing`);
    }
}

const sakib = new Person('Sakib', 34);
sakib.play();
const tamim = new Person('Tamim', 36);

const sakib = new Personwithnew('Sakib', 34);
const tamim = new Personwithnew('Tamim', 36);




const captain = {
    name: 'mashrafe',
    age: 34,
    country: 'Bangaldesh'
}

const player = Object.create(captain);
console.log(player);

function test() {}
console.log(test.prototype);




class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
        eat() {
            console.log(`Person is eating`);
        }
    
        sleep() {
            console.log(`Person is sleeping`);
        }
        
        play() {
            console.log(`Person is a playing`);
        }
}

const shakib = new Person('Shakib', 35);
shakib.play();
const mash = new Person('Mashrafe', 36);