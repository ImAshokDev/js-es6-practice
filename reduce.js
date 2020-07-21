const marks = [12, 34, 56, 60, 60, 24];

const sum = marks.reduce((acc, e) => {
  return acc + e;
}, 0);

console.log(sum);
