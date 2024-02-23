'use strict';

const climber = {
    currenStep: 0,
    up() {
        this.currenStep++;
        return this;
    },
    down() {
        this.currenStep--;
        return this;
    },
    saystep() {
        console.log(
            'я сейчас на ступени',
            this.currenStep
        );
        return this;
    },
};


climber
.saystep()
.up()
.up()
.down()
.down()
.saystep()
.up()
.saystep()

console.log(
    [0, 1, 0, 0, 2]
        .map((x) => (x * 2))
);

// const sayArrow = () => {
//     console.log('меня зовут',this?.name,this?.title);
//     console.log('мой возраст',this?.age);
//     console.log(this);
// }

// function sayName (extra) {
//     console.log(extra);
//     console.log(' зовут',this?.name,this?.title);
//     console.log('мой возраст',this?.age);
//     // console.log(this);
// }

// const somePerson = {
//     name: 'Ынтымак',
//     age: 23,
//     title: 'дос',
//     say: sayName,
// };

// const otherPerson = {
//     name: 'Нуржигит',
//     age: 25,
//     title: 'акыреттик',
//     // say: sayName,
// };

// somePerson.say('привет');
// somePerson.say.bind(otherPerson)('а его');
// somePerson.say.call(otherPerson, 'да его');

// // otherPerson.say();

// // sayArrow();