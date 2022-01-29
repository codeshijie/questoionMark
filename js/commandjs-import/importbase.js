export let a = 3;

console.log("base", a)
setTimeout(() => {
    a = 33;
    console.log("basesettimeout", a)
}, 3000)


export let b = {
    b1: 3
}
console.log("base:B", b)
setTimeout(() => {
    b.b1 = 33;
    console.log("basesetimeout:B", b)
},3000)