//Questão 1
//Para repetir um bloco de código com uma limitação pré-definida
//Questão 2
//(let i = 0;...
//É a condição inicial que dita o inicio da repetição
//Questão 3
//(... i < 10; ...
//A condição que quando se torna falsa interrompe a repetição
//Questão 4
//... i++)
//Realiza o incremento da condição
//Questão 5 
for (var i = 0; i < 10; i++) {
    console.log("Testando uma frase!");
}
//Questão 6
for (var i = 0; i < 10; i++) {
    console.log(i);
}
//Questão 7
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
//Questão 8
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
//Questão 9
var nomes = ['João',
    'Paulo',
    'Pedro',
    'Gustavo',
    'Maria'];
for (var _i = 0, nomes_1 = nomes; _i < nomes_1.length; _i++) {
    var n_1 = nomes_1[_i];
    console.log(n_1);
}
//Questão 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
//Questão 11
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
//Questão 12
var resultado = 0;
for (var i = 1; i <= 100; i++) {
    resultado += i;
}
console.log(resultado);
//Questão 13
for (var i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
//Questão 14
var resultado1 = 1;
for (var i = 1; i <= 5; i++) {
    resultado1 *= i;
}
console.log(resultado1);
//Questão 15
var resultadoTabuada = 7;
for (var i = 1; i <= 10; i++) {
    console.log("".concat(resultadoTabuada * i));
}
//Questão 16 
var total = 0;
for (var index = 1; index <= 5; index++) {
    var nota = Number(prompt("Digite a nota "));
    total += nota;
}
console.log("M\u00E9dia = ".concat(total / 5));
//Questão 17
var n = 3;
for (var i = 50; i >= 1; i--) {
    if (i % n == 0) {
        console.log(i);
    }
}
//Questão 18
var maior = null;
var menor = null;
for (var index = 1; index <= 10; index++) {
    var numeros = Number(prompt("Digite o número"));
    if (maior == null || numeros > maior) {
        maior = numeros;
    }
    if (menor == null || numeros < menor) {
        menor = numeros;
    }
}
console.log("Maior numero digitado: ".concat(maior, ". Menor numero: ").concat(menor));
//Questão 19
for (var i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
//Questão 20
var contador = 0;
for (var i = 1; i <= 5; i++) {
    var nota = Number(prompt("Digite a nota."));
    if (nota >= 7) {
        contador++;
    }
}
console.log("O total de alunos aprovados foi de ".concat(contador));
//Questão 21 
var num = prompt("Digete um número de dois digitos:");
var resultado2 = num === null || num === void 0 ? void 0 : num.split("");
if (resultado2 != undefined) {
    var soma = 0;
    for (var _a = 0, resultado2_1 = resultado2; _a < resultado2_1.length; _a++) {
        var i = resultado2_1[_a];
        soma += Number(i);
    }
    console.log(soma);
}
//Questão 22
var inteiro = 4;
for (var i = 1; i <= inteiro; i++) {
    if (inteiro % i == 0) {
        console.log(i);
    }
}
//Questão 23
var media = 0;
for (var index = 1; index <= 5; index++) {
    var altura = Number(prompt("Digite a altura: "));
    media += altura;
}
console.log("A m\u00E9dia das alturas inseridas foi: ".concat(media));
//Questão  24
for (var i = 100; i >= 1; i--) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
}
//Questão 25 
var digito = prompt("Digete um número de dois digitos: ");
var resultadoDigito = digito === null || digito === void 0 ? void 0 : digito.split("");
if (resultadoDigito != undefined) {
    var soma = 0;
    for (var _b = 0, resultadoDigito_1 = resultadoDigito; _b < resultadoDigito_1.length; _b++) {
        var i = resultadoDigito_1[_b];
        if (Number(i) % 2 == 0) {
            soma += Number(i);
        }
    }
    console.log("TESTE ".concat(soma));
}
//Questão 26
var numero = prompt("Digite um número");
if (numero != null) {
    console.log(numero.split(""));
    var invertido = Number(numero.split("").reverse().join(""));
    console.log("N\u00FAmero invertido: ".concat(invertido));
}
