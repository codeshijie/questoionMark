export let a = 3;

console.log("base:A", a)
setTimeout(() => {
    a = 33;
    console.log("basesettimeout:A", a)
}, 3000)


export let b = {
    b1: 3
}
console.log("base:B", b)
setTimeout(() => {
    b.b1 = 33;
    console.log("basesetimeout:B", b)
}, 3000)


let c = {
    c: 3
}
export default c;
console.log("base:C", b)
setTimeout(() => {
    c.c1 = 33;
    console.log("basesetimeout:C", c)
}, 3000)
setTimeout(() => {

    console.log("basesetimeout8s:C", c)
}, 8000)