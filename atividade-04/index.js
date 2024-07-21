//Questão 1
var inteiro = Number(prompt("Digite um número inteiro: "));
if (inteiro > 0) {
    console.log("O número é positivo.");
}
else if (inteiro < 0) {
    console.log("O número é negativo.");
}
else {
    console.log("O número é 0");
}
//Questão 2
var idade = Number(prompt("Digite sua idade: "));
if (idade >= 18) {
    console.log("Você é maior de idade.");
}
else {
    console.log("Você é menor de idade.");
}
//Questão 3
inteiro = Number(prompt("Digite o primeiro número inteiro: "));
var inteiro2 = Number(prompt("Digite o segundo número inteiro: "));
if (inteiro > inteiro2) {
    console.log("".concat(inteiro, " \u00E9 maior que ").concat(inteiro2, "."));
}
else if (inteiro < inteiro2) {
    console.log("".concat(inteiro2, " \u00E9 maior que ").concat(inteiro, "."));
}
else {
    console.log("".concat(inteiro, " e ").concat(inteiro2, " s\u00E3o iguais."));
}
//Questão 4
if (inteiro % 2 == 0) {
    console.log("".concat(inteiro, " \u00E9 par."));
}
else {
    console.log("".concat(inteiro, " \u00E9 impar."));
}
//Questão 5
var nota = Number(prompt("Digite a primeira nota: "));
var nota2 = Number(prompt("Digite a segunda nota: "));
var nota3 = Number(prompt("Digite a terceira nota: "));
var media = (nota + nota2 + nota3) / 3;
if (media >= 7) {
    console.log("Aprovado. M\u00E9dia: ".concat(media));
}
else {
    console.log("Reprovado. M\u00E9dia: ".concat(media));
}
//Questão 6
var nome = String(prompt("Digite o nome da primeira pessoa: "));
var nome2 = String(prompt("Digite o nome da segunda pessoa: "));
if (nome.length > nome2.length) {
    console.log("".concat(nome, " possui mais caracteres: ").concat(nome.length));
}
else if (nome2.length > nome.length) {
    console.log("".concat(nome2, " possui mais caracteres: ").concat(nome2.length));
}
else {
    console.log("".concat(nome, " e ").concat(nome2, " possuem a mesma quantidade de caracteres: ").concat(nome2.length));
}
//Questão 7
var letra = String(prompt("Digite uma letra: "));
var vogais = ["a", "e", "i", "o", "u"];
if (vogais.indexOf[letra] !== -1) {
    console.log("\u00C9 uma vogal: ".concat(letra));
}
else {
    console.log("\u00C9 uma consoante: ".concat(letra));
}
//Questão 8
var numero = Number(prompt("Digite o primeiro número: "));
var numero2 = Number(prompt("Digite o segundo número: "));
var numero3 = Number(prompt("Digite o terceiro número: "));
if (numero > numero2 && numero2 > numero3) {
    console.log(numero, numero2, numero3);
}
else if (numero > numero3 && numero3 > numero2) {
    console.log(numero, numero3, numero2);
}
else if (numero2 > numero && numero > numero3) {
    console.log(numero2, numero, numero3);
}
else if (numero2 > numero3 && numero3 > numero) {
    console.log(numero2, numero3, numero);
}
else if (numero3 > numero && numero > numero2) {
    console.log(numero3, numero, numero2);
}
else if (numero3 > numero2 && numero2 > numero) {
    console.log(numero3, numero2, numero);
}
else {
    console.log(numero, numero2, numero3);
}
//Questão 9
var peso = Number(prompt("Digite seu peso: "));
var altura = Number(prompt("Digite sua altura: "));
var imc = peso / Math.pow(altura, 2);
if (imc < 18.5) {
    console.log("Magreza. IMC: ".concat(imc.toFixed(1)));
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal. IMC: ".concat(imc.toFixed(1)));
}
else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Sobrepeso. IMC: ".concat(imc.toFixed(1)));
}
else if (imc >= 30.0 && imc <= 39.9) {
    console.log("Obesidade. IMC: ".concat(imc.toFixed(1)));
}
else {
    console.log("Obesidade grave. IMC: ".concat(imc.toFixed(1)));
}
//Questão 10
var numeroMes = Number(prompt("Digite o número do mês: "));
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
console.log("M\u00EAs: ".concat(numeroMes, ", ").concat(meses[numeroMes - 1]));
//Questão 11
var salario = Number(prompt("Digite seu salário: "));
if (salario < 1.500) {
    console.log("Seu novo sal\u00E1rio \u00E9: ".concat(salario * 0.15));
}
else {
    console.log("Seu novo sal\u00E1rio \u00E9: ".concat(salario * 0.10));
}
//Questão 12
inteiro = Number(prompt("Digite um numero inteiro: "));
if (inteiro / 3 == 0 && inteiro / 5 == 0) {
    console.log("O número é divisivel por 3 e por 5.");
}
//Questão 13
var diaDaSemana = String(prompt("Digite um dia da semana"));
if (diaDaSemana.toLowerCase() == "sábado" || diaDaSemana.toLowerCase() == "domingo") {
    console.log("".concat(diaDaSemana, ", fim de semana!"));
}
else {
    console.log("".concat(diaDaSemana, ", dia \u00FAtil..."));
}
//Questão 14
inteiro = Number(prompt("Digite um número de 1 até 5: "));
switch (inteiro) {
    case 1:
        console.log("Muito insuficiente");
        break;
    case 2:
        console.log("Insuficiente");
        break;
    case 3:
        console.log("Regular");
        break;
    case 4:
        console.log("Bom");
        break;
    case 5:
        console.log("Muito bom");
        break;
    default:
        console.log("Opção não encontrada.");
        break;
}
//Questão 15
inteiro = Number(prompt("Digite um número de 1 até 7: "));
switch (inteiro) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Opção não encontrada.");
        break;
}
//Questão 16
//Questão 17
idade = Number(prompt("Digite sua idade: "));
if (idade == 0 || idade == 1) {
    console.log("Beb\u00EA. ".concat(idade, " anos."));
}
else if (idade <= 12 && idade > 1) {
    console.log("Crian\u00E7a. ".concat(idade, " anos."));
}
else if (idade >= 13 && idade <= 18) {
    console.log("Adolescente. ".concat(idade, " anos."));
}
else {
    console.log("Adulto. ".concat(idade, " anos."));
}
//Questão 18
//Questão 19
//Questão 20
//Questão 21
