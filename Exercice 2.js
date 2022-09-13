const prompt = require('prompt-sync')()

let Even = 0, Odd = 0

for (let i = 0; i < 10; i++){
    Num = prompt('Typer your Number: ')
    number = Number(Num)

if(number % 2 == 0){
    Even ++
}
else if (number % 2 == 1)
    Odd ++
}
console.log(`there are ${Even} even numbers`)
console.log(`there are ${Odd} odd numbers`)