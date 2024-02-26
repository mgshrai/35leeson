"use strict";

function logName() {
    console.log(this.name);
}

const object1 = {
    name: "object1",
    logName: logName
    
};

const object2 = {
    name: "object2",
    logName: logName
};

object1.logName();
object2.logName();

const boundLogName = logName.bind(object1);
boundLogName();

const printNameArrow = () => {
    console.log(this.name);
};

const object3 = {
    name: "object3",
    printNameArrow: printNameArrow
};

const object4 = {
    name: "object4",
    printNameArrow: printNameArrow
};

object3.printNameArrow();
object4.printNameArrow();

const boundPrintNameArrow = printNameArrow.bind(object1);
boundPrintNameArrow();

printNameArrow();

const obj = {
    greeting: "Привет",
    names: ["Жаныбек", "Алина", "Иван"],
    greetEveryone: function() {
        this.names.forEach(name => {
            console.log(`${this.greeting}, ${name}!`);
        });
    }
};

obj.greetEveryone();

