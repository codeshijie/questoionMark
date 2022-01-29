let {a,b} = require("./requirebase")

console.log("require", a)
setTimeout(() => {
    console.log("requireSetTimeOut", a)
}, 5000)

console.log("require:b", b)
setTimeout(() => {
    console.log("requireSetTimeOut:", b)
}, 5000)