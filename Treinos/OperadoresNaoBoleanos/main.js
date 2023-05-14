// Falsy
// Undefined
// null
// 0
// false
// **
// Nan - not a number
// Truthy

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
console.log("🚀 ~ file: main.js:15 ~ corPerfil:", corPerfil)


// Troca de valores

let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b =c;

console.log(a);
console.log(b);