//Questão 1
var frase = prompt("Entre a primeira frase");
console.log(frase);
//Questão 2
var palavra = "123";
console.log(typeof Number(frase));
var numero = 321;
console.log(typeof String(numero));
//Questão 3
var numero1 = prompt("Digite o primeiro número: ");
var numero2 = prompt("Digite o segundo número: ");
var resultado = Number(numero1) + Number(numero2);
console.log(resultado);
//Questão 4
var palavra1 = "Estudar ";
var palavra2 = "é bom!";
console.log(palavra1 + palavra2);
var numero3 = 48;
console.log(palavra1 + palavra2 + " " + numero3);
//Questão 5
var nomeUser = prompt("Digite seu nome");
console.log("Seja bem vindor " + nomeUser);
//Questão 6
var idade = String(prompt("Digite sua idade: "));
console.log(Number(idade));
//Questão 7
var inteiro = Number(prompt("Digite um numero inteiro: "));
console.log(inteiro.toFixed(2));
//Questão 8
var inteiro2 = Number(prompt("Escolha 1 numero: "));
var inteiro3 = Number(prompt("Escolha outro numero: "));
console.log(inteiro2 + inteiro3);
//Questão 9
var decimal = Number(prompt("Digite um decimal"));
console.log(Math.pow(decimal, 2));
//Questão 10
var anoNascimento = Number(prompt("Digite seu ano de nascimento"));
var idade2 = 2024 - anoNascimento;
console.log(idade2);
//Questão 11
var primeiroNome = String(prompt("Digite seu primeiro nome"));
var segundoNome = String(prompt("Digite seu segundo nome"));
var nomeCompleto = primeiroNome + " " + segundoNome;
console.log(nomeCompleto);
//Questão 12
var numeros = prompt("Digite uma sequência de números separados por espaço: ");
var array = [];
if (numeros != null) {
    array = numeros.split(" ");
}
else {
    console.log("Nenhum número foi digitado.");
}
console.log("A quantidade de caracteres da frase digitada é de: " + array.length);
//Questão 13
var animal = prompt("Digite o primeiroNome de um animal: ");
console.log("O primeiroNome do animal digitado foi: ".concat(animal));
//Questão 14
console.log("Seu primeiroNome na ordem inversa:" + segundoNome + primeiroNome);
//Questão 15
var texto = prompt("Digite uma frase qualquer: ");
if (texto != null) {
    var tamanhoTexto = texto.length;
    console.log(tamanhoTexto);
}
else {
    console.log("Nenhuma frase foi digitada.");
}
//Questão 16
var num = Number(prompt("Digite um número para checarmos se ele é par ou ímpar, positivo ou negativo: "));
console.log("".concat(num % 2 == 0 ? 'O número é par' : "O número é ímpar"));
//Questão 17
console.log("".concat(num >= 0 ? 'O número é positivo' : "O número é negativo"));
//Questão 18
console.log("O maior número que você digitou foi" + Math.max(num, numero, numero3));
//Questão 19
var peso = Number(prompt("Digite seu peso: "));
var altura = Number(prompt("Digite sua altura: "));
var imc = peso / (altura * altura);
console.log("".concat(primeiroNome, ", o seu IMC \u00E9 ").concat(imc.toFixed(2)));
// Questão 20
if (primeiroNome != null) {
    console.log("".concat(primeiroNome.length > 5 ? "O seu primeiroNome tem mais de 5 letras" : "O seu primeiroNome tem menos de 5 letras"));
}
//Questão 21
var estadoCivil = prompt("Digite seu estado civil: ");
console.log("".concat(estadoCivil == "solteiro" || estadoCivil == "solteira" ? "Voce é solteiro(a)" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado(a)" : "Você não é nem solteiro e nem casado."));
//Questão 22
var baseTriangulo = Number(prompt("Digite a base do triangulo: "));
var alturaTriangulo = Number(prompt("Digite a altura do triangulo: "));
var areaTriangulo = baseTriangulo * alturaTriangulo;
console.log("A base do triângulo é " + areaTriangulo);
//Questão 23
var cidade = prompt("Digite o primeiroNome da cidade em que você mora: ");
if (cidade != null) {
    console.log("".concat(cidade.charAt(0) == "S" ? "A cidade digitada começa com a letra S" : "A cidade digitada não começa com a letra S"));
}
//Questão 24
var numeroDecimal1 = Number(prompt("Digite um número decimal: "));
var numeroDecimal2 = Number(prompt("Digite outro número decimal: "));
console.log("O resto da divisão dos números decimais que você digitou é: " + (numeroDecimal1 % numeroDecimal2).toFixed(2));
//Questão 25
var digito = Number(prompt("Digite um número decimal para arrendondarmos: "));
console.log("O número " + digito + " arrendondado é " + Math.floor(digito));
//Questão 26
var numInt = Number(prompt("Digite um número inteiro"));
var numIntAdicionado = numInt + 10;
var numString = numIntAdicionado.toString();
console.log(numString + " é do tipo " + typeof numString);
//Questão 27
var dataNascimento = prompt("Digite sua data de nascimento. Exemplo: 'dd/mm/aaaa': ");
var dataSeparada = [];
if (dataNascimento != null) {
    dataSeparada = dataNascimento.split("/");
}
var dia = parseInt(dataSeparada[0]);
var mes = parseInt(dataSeparada[1]);
var ano = parseInt(dataSeparada[2]);
console.log("Dia: " + dia + ", Mês: " + mes + ", Ano: " + ano);
//Questão 28
var estado = prompt("Você já disse a cidade em que mora, agora diga qual o estado: ");
console.log("Você mora em " + cidade + ", " + "estado.");
//Questão 29
console.log("Bem-vindo ao nosso programa, nascido em " + anoNascimento);
//Questão 30
var dados1 = Number(prompt("Digite um número inteiro: "));
var dados2 = prompt("Digite uma string: ");
console.log("Dados concatenados: " + dados1 + " " + dados2);
//Questão 31
var produto = prompt("Digite o produto: ");
var preco = prompt("Digite o preço do produto: ");
console.log("Resumo pedido: " + produto + ", R$" + preco);
//Questão 32
console.log("O dobro de " + numInt + " é igual a " + Math.pow(numInt, 2));
//Questão 33
var email = prompt("Digite seu e-mail: ");
console.log("Obrigada por se inscrever. Continuaremos enviando notícias para o e-mail: " + email);
//Questão 34
console.log("A soma de" + num + " + " + numInt + " é " + (num + numInt));
console.log("A diferença de" + num + " + " + numInt + " é " + Math.abs(num - numInt));
console.log("O produto de" + num + " + " + numInt + " é " + (num * numInt));
console.log("O quociente de" + num + " + " + numInt + " é " + (num / numInt));
//Questão 35
var baseTriangulo1 = Number(prompt("Digite a base do triangulo: "));
var alturaTriangulo1 = Number(prompt("Digite a altura do triangulo: "));
var areaTriangulo1 = baseTriangulo1 * alturaTriangulo1;
console.log("A base do triângulo é " + areaTriangulo1);
//Questão 36
var raio = Number(prompt("Digite o raio de uma circunferência: "));
var pi = 3.14;
var perimetro = 2 * pi * raio;
console.log(perimetro);
//Questão 37
console.log("O perímetro do triângulo 1 é: " + 2 * (baseTriangulo + alturaTriangulo));
//Questão 38
console.log("A média aritmética entre os três números decimais já digitados aqui é: " + (decimal + numeroDecimal1 + numeroDecimal2 / 3));
//Questão 39
console.log(primeiroNome + ", você já viveu " + idade2 * 365 + " dias e " + idade2 * 12 + " meses.");
//Questão 40
var valorReal = Number(prompt("Digite o valor valor em real: "));
var cotacaoDolar = Number(prompt("Digite a cotação do dólar atualmente: "));
var valorDolar = valorReal * cotacaoDolar;
console.log(valorDolar);
// Questão 41 
console.log("O número decimal " + decimal + "convertido para o número mais próximo é: " + Math.ceil(decimal));
// Questão 42
console.log("O resultado da operação com três números inteiros ((n1 + n2) * n3) é: " + (num + numero3) * numInt);
// Questão 43
var temperatura = Number(prompt("Digite uma temperatura em graus Celsius: "));
var temperaturaConvertida = (temperatura * 9 / 5) + 32;
console.log(temperaturaConvertida);
