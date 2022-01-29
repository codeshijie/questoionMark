// require 是浅拷贝
let {a,b} = require("./requirebase")

console.log("require", a)
setTimeout(() => {
    console.log("requireSetTimeOut", a)
}, 5000)

console.log("require:b", b)
setTimeout(() => {
    console.log("requireSetTimeOut:B", b)
}, 5000)

setTimeout(() => {
    b.bbb="SDFFF"
    console.log("requireSetTimeOut1:B", b)
}, 7000)