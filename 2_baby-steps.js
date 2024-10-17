let sum = 0;
let len = process.argv.length;
for (let i = 2; i < len; i++) {
  sum += +process.argv[i];
}
console.log(sum);
