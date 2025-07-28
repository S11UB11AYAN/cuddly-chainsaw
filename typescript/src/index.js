"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
x = "shubhayan";
console.log(x);
function Greet(firstName) {
    console.log(`Hello ${firstName}`);
}
const greetArrow = (firstName) => {
    console.log(`Hello ${firstName}`);
};
const sum = (a, b) => {
    return a + b;
};
greetArrow("shubhayan");
Greet("shubhayan");
exports.default = sum;
const isAdult = (age) => {
    return age >= 18 ? true : false;
};
isAdult(18) ? console.log("Adult") : console.log("Minor");
const fn = (dn) => {
    setTimeout(dn, 1000);
};
const callback = () => {
    console.log(`Hello`);
};
fn(callback);
