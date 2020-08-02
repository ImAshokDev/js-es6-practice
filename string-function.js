var a = "ashok";

console.log(a);
console.log(a.length);

var b = a.concat(" welcome");
console.log(b);

name = "ashok From chennai";
var c = name.split(" ");
console.log(c);

d = "ASHOK";

console.log("lower case:", d.toLowerCase());

console.log("to upper case", a.toUpperCase());

// replace
console.log("without replace: ", name);
var e = name.replace("chennai", "vellore");
console.log(e);
// regular expression in replace
var f = name.replace("from", "to");
console.log(f);
var g = name.replace(/from/i, "to");

console.log(g);
