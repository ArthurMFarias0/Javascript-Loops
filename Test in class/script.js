let ageText = prompt('Digite sua idade: ');
let age = Number(ageText);

while (age < 18) {
    ageText = prompt('O site só pode ser acessado por maiores de idade! ')
    age = Number(ageText);
}

document.write('Seja bem vinde!');

let optionText
do {
    optionText = prompt('Escolha uma opção:\n\n1 - Caviar\n2 - Almondega\n3 - Feijoada com fígado');
    option = Number(optionText)
} while(option < 1 || option > 3);

document.write('<br><br>');

switch (option) {
    case 1:
        document.write('Escolheu caviar!');
        break;
    case 2:
        document.write('Escolheu almondega!!');
        break;
    case 3:
        document.write('Escolheu Feihoada com fígado!');
        break;
}

const boletim = [];
const qtdMaterias = 3;
const qtdProvas = 3;

for (let i = 0; i < qtdMaterias; i++) {
    boletim[i] = [];
    for (let j = 0; j < qtdProvas; j++){
        const nota = prompt(`Digite a nota da ${j + 1}ª prova da ${i + 1} Matéria`);
        boletim[i][j] = Number(nota);
    }
}

for (let i = 0; i < qtdMaterias; i++)   {
    document.write(`<br>${i + 1}ª Matéria: `)
    for (let j = 0; j < qtdProvas; j++) {
        document.write(`${boletim[i][j]} `)
    }
}