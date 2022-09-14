const prompt = require('prompt-sync')();

let M = 0;
let n = 0;
let qtd = 0;

n = parseInt(prompt('Enter a keyboard number: '));

do{
  n = parseInt(prompt('Enter a keyboard number :'));

  if(n % 3 == 0){
    M = M + n
    qtd++
  }
}while(n!=0)
console.log(`The average of the two values: ${M/qtd}`);