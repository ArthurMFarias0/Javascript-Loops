const prompt = require('prompt-sync')()

let x

for (x = 1000; x < 2000; x++){
    if (x % 11 == 5){
        console.log('Numbers divided by 11 that leaves 5: \n' + x)
    }
}
