console.log("hi this my practice 2 in js");
alert("hello");
// var is globally scope not block code
// here value can change agin like 
// var a = 8;
// a= a + 2; 
// now here   (a=10)

var a = 8;
var b = 3;
var c = 4;
var d = 10;
var e = 2;
a = a + 2;
console.log(a + b + c + d + e);
console.log(a);

// const is the constant value 
// const f = 1 ; value can not be change like var
const f = 3;
a = a + 2;

console.log(f);


// let is block code
let g = 5;
let h = 5;
let i = 5;
let j = 6;
j = j + 5;
{
    let j = 10;
    console.log(j);
}

console.log(g);
console.log(j);



// chek datatype
let u = "Shoaib"
let v = 5;
let w = 5.5;
const x = true;
let y = undefined;
let z = null;

console.log(u, v, w, x, y, z);
console.log(typeof u, typeof v, typeof w, typeof x, typeof y, typeof z);