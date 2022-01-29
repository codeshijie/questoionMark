import { a,b } from './importbase.js';

console.log("import", a);
setTimeout(() => {
    console.log("importsettimeout",a)
}, 5000)



console.log("import:b", b)
setTimeout(() => {
    console.log("importSetTimeOut:", b)
}, 5000)