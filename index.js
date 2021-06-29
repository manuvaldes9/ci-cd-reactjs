'use strict';

var principal = require('./app/principal');

var a = 3;
var b = 5;

console.log(`Add ${a} + ${b} = ${principal.add(a,b)}`);
console.log(`Minus ${a} + ${b} = ${principal.minus(a,b)}`);
console.log(`Multiply ${a} + ${b} = ${principal.multiply(a,b)}`);
console.log(`Divide ${a} + ${b} = ${principal.divide(a,b)}`);