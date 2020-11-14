
let modules1 = require('./modules1')
let modules2 = require('./modules2')
let modules3 = require('./modules3')
let uniq = require('uniq')

console.log(modules1.age);
modules2.haha();
console.log(modules3());
console.log(uniq([4,7,2,5,3,6]))
// console.log(modules3.haha())
console.log(require)