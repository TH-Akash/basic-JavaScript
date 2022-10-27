// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// Natural number sum  1 to 10 sum
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// breack keyword  1to 3
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}
console.log("Breack");
// continue
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}
console.log("End");
