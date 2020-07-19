//variable
// let, const, var, global

function getData() {
  var name = "ashoksdffdd";
  console.log("Inside function : " + name);
}

getData();

console.log("Outside function : " + name);

// let and var

function letData() {
  if (true) {
    let a = 5;

    a = "B";
    console.log(a);
  }
}

letData();

function varData() {
  if (true) {
    var b = 6;
  }
  console.log("var: " + b);
}

varData();

// const

function constData() {
  if (true) {
    const grade = "A";
    console.log(grade);
  }
}

constData();
