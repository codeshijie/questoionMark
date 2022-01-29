// import 是引入一个指针，指向原来的export 并且都是const ，不能重新赋值

import c, { a, b } from './importbase.js';
 
console.log("import", a);
setTimeout(() => {
    console.log("importsettimeout", a)
}, 5000)



console.log("import:b", b)
setTimeout(() => {
    console.log("importSetTimeOut:b", b)
}, 5000)



console.log("import:c", c)
setTimeout(() => {
    console.log("importSetTimeOut:c", c)
}, 5000)
setTimeout(() => {
    c.cc = "DSFF"
    console.log("importSetTimeOut:c", c)
}, 7000)


