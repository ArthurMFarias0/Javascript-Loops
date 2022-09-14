const prompt = require('prompt-sync')()

let i = 0
let qtdCalmas = 0
let qtdMNervosa = 0
let qtdHAgressivos = 0
let qtdOCalmos = 0
let qtdNervosos40 = 0
let qtdCalmos18 = 0

while (i < 150) {
    const idadeText = prompt('\nDigite a idade: ')
    const idade = Number(idadeText)
    console.log('\nSeu sexo é: \n')
    console.log('1 - Homem\n')
    console.log('2 - Mulher\n')
    console.log('3 - Outros\n')
    const sexoTest = prompt('Escolha a opção de sexo: ')
    const sexo = Number(sexoTest)
    console.log('\nEscolha um humor: \n')
    console.log('1 - Calmo\n')
    console.log('2 - Nervoso\n')
    console.log('3 - Agressivo\n')
    const humorText = prompt('\nEscolha seu humor: ')
    const humor = Number(humorText)
    i ++;

    if (humor == 1){
        qtdCalmas ++;
    }
    if (sexo == 2 && humor == 2){
        qtdMNervosa ++;
    }
    if (sexo == 1 && humor == 3){
        qtdHAgressivos++;
    }
    if (sexo == 3 && humor == 1){
        qtdOCalmos ++;
    }
    if (humor == 2 && idade > 40){
        qtdCalmos18 ++;
    }
    if (humor == 1 && idade < 18)
        qtdNervosos40 ++;
}

console.log(`\nO total de pessoas calmas é ${qtdCalmas}`)
console.log(`\nO total de mulheres nervosas é ${qtdMNervosa}`)
console.log(`\nO total de homens agressivos é ${qtdHAgressivos}`)
console.log(`\nO total de outros calmos${qtdOCalmos}`)
console.log(`\nO total de nervosos com mais de 40 é ${qtdNervosos40}`)
console.log(`\nO total de calmos com 18 anos é ${qtdCalmos18}`)