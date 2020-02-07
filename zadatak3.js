let n = 4;
let x = '';
let b = '';
let vrh = ' '.repeat(5) + '*';
console.log(vrh)
for (let i = 0; i < n; i++) {
    x += ' '.repeat(n - i) + '*' + ' '.repeat(2 * i + 1) + '*';
    x +='\n';}

console.log(x); 

for (let i = n -1; i >= 0; i--) {
    x += ' '.repeat(n - i) + '*' + ' '.repeat(2 * i + 1) + '*';
    x +='\n';}

console.log(x); 
console.log(vrh);