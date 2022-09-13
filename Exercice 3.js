const prompt = require('prompt-sync')()

let young = 0, old = 0, age = 0

let ageText = prompt('Type your age: ')

while (age != -99) {
let ageText = prompt('Type your age: ')
    age = Number(ageText)
    if (age < 21){
    young ++}
    else if (age > 50){
    old ++}
}

console.log('Number of people under 21: ' + young)
console.log('Number of people over 50: ' + old)
