// forEach loop
const name = [1, 2, 3, 4, 5];

name.forEach((element, i) => {
  console.log("forEach loop:", element, i);
});

// for in loop

obj = {
  name: "ashok",
  age: 23,
};

for (let x in obj) {
  console.log(x);
  console.log(obj[x]);
}
// using array
for (let x in name) {
  console.log(x);
}

// for of loop
for (let x of name) {
  console.log(x);
}
