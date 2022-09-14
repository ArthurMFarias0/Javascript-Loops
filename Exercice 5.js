const prompt = require('prompt-sync')()

let som = 0, n = 0

n = parseInt(prompt('Enter a keyboard number: '))

do{

    n = parseInt(prompt('Enter a keyboard number: '))
    
    if(n>0){
        som = som + n 
    }

}while(n != 0)

console.log(`The sum was: ${som}`)