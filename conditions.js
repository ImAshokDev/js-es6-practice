function getData(a) {
  if (a <= 10) {
    console.log("small");
  } else {
    console.log("big");
  }
}

let a = 5;
getData(a);

for (let i = 1; i <= 10; i = i + 1) {
  console.log("for loop: " + i);
}

let c = 4;
while (c <= 10) {
  console.log("while loop: " + c);
  c++;
}
