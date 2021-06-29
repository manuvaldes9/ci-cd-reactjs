'use strict';

var principal = require('./app/principal');

const express = require('express')

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req,res) => res.send('hello world'))

//app.listen(port, () => console.log(port))

async function main (){
    await app.listen(port);
    console.log('Server is running')
}

main();
var a = 3;
var b = 5;

console.log(`Add ${a} + ${b} = ${principal.add(a,b)}`);
console.log(`Minus ${a} - ${b} = ${principal.minus(a,b)}`);
console.log(`Multiply ${a} * ${b} = ${principal.multiply(a,b)}`);
console.log(`Divide ${a} / ${b} = ${principal.divide(a,b)}`);