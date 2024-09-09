//Questão 1
let frase = prompt("Entre a primeira frase")
console.log(frase)

//Questão 2
let palavra: string = "123"
console.log(typeof Number(frase))

let numero: number = 321
console.log(typeof String(numero))

//Questão 3
let numero1 = prompt("Digite o primeiro número: ")
let numero2 = prompt("Digite o segundo número: ")

let resultado = Number(numero1) + Number(numero2)
console.log(resultado)

//Questão 4
let palavra1: string = "Estudar "
let palavra2: string = "é bom!"
console.log(palavra1 + palavra2)

let numero3: number = 48
console.log(palavra1 + palavra2 + " " + numero3)

//Questão 5
let nomeUser = prompt("Digite seu nome")
console.log("Seja bem vindor " + nomeUser)

//Questão 6
let idade = String(prompt("Digite sua idade: "))
console.log(Number(idade))

//Questão 7
let inteiro = Number(prompt("Digite um numero inteiro: "))
console.log(inteiro.toFixed(2))

//Questão 8
let inteiro2 = Number(prompt("Escolha 1 numero: "))
let inteiro3 = Number(prompt("Escolha outro numero: "))
console.log(inteiro2 + inteiro3)

//Questão 9
let decimal = Number(prompt("Digite um decimal"))
console.log(decimal ** 2)

//Questão 10
let anoNascimento = Number(prompt("Digite seu ano de nascimento"))
let idade2: number = 2024 - anoNascimento
console.log(idade2)

//Questão 11
let primeiroNome = String(prompt("Digite seu primeiro nome"))
let segundoNome = String(prompt("Digite seu segundo nome"))
let nomeCompleto: string = primeiroNome + " " + segundoNome
console.log(nomeCompleto)

//Questão 12
const numeros = prompt("Digite uma sequência de números separados por espaço: ")
let array: string[] = []

if (numeros != null) { 
  array = numeros.split(" "); 
} else {
  console.log("Nenhum número foi digitado.");
}
console.log("A quantidade de caracteres da frase digitada é de: " + array.length)

//Questão 13
const animal = prompt("Digite o primeiroNome de um animal: ")
console.log(`O primeiroNome do animal digitado foi: ${animal}`)

//Questão 14
console.log("Seu primeiroNome na ordem inversa:" + segundoNome + primeiroNome)

//Questão 15
const texto = prompt("Digite uma frase qualquer: ")

if (texto != null) {
  let tamanhoTexto = texto.length
  console.log(tamanhoTexto)
} else {
  console.log("Nenhuma frase foi digitada.")
}

//Questão 16
const num = Number(prompt("Digite um número para checarmos se ele é par ou ímpar, positivo ou negativo: "))
console.log(`${num % 2 == 0 ? 'O número é par' : "O número é ímpar"}`)

//Questão 17
console.log(`${num >= 0 ? 'O número é positivo' : "O número é negativo"}`)

//Questão 18
console.log("O maior número que você digitou foi" + Math.max(num, numero, numero3))

//Questão 19
const peso = Number(prompt("Digite seu peso: "))
const altura = Number(prompt("Digite sua altura: "))
let imc = peso / (altura * altura)

console.log(`${primeiroNome}, o seu IMC é ${imc.toFixed(2)}`)

// Questão 20
if (primeiroNome != null) {
  console.log(`${primeiroNome.length > 5 ? "O seu primeiroNome tem mais de 5 letras" : "O seu primeiroNome tem menos de 5 letras"}`)
}

//Questão 21
const estadoCivil = prompt("Digite seu estado civil: ")

console.log(`${estadoCivil == "solteiro" || estadoCivil == "solteira" ? "Voce é solteiro(a)" : estadoCivil == "casado" || estadoCivil == "casada" ? "Você é casado(a)" : "Você não é nem solteiro e nem casado."}`)

//Questão 22

const baseTriangulo = Number(prompt("Digite a base do triangulo: "))
const alturaTriangulo = Number(prompt("Digite a altura do triangulo: "))
const areaTriangulo = baseTriangulo * alturaTriangulo

console.log("A base do triângulo é " + areaTriangulo)

//Questão 23
const cidade = prompt("Digite o primeiroNome da cidade em que você mora: ")
if (cidade != null) {
  console.log(`${cidade.charAt(0) == "S" ? "A cidade digitada começa com a letra S" : "A cidade digitada não começa com a letra S"}`);
}

//Questão 24
const numeroDecimal1 = Number(prompt("Digite um número decimal: "))
const numeroDecimal2 = Number(prompt("Digite outro número decimal: "))

console.log("O resto da divisão dos números decimais que você digitou é: " + (numeroDecimal1 % numeroDecimal2).toFixed(2))

//Questão 25
const digito = Number(prompt("Digite um número decimal para arrendondarmos: "))
console.log("O número " + digito + " arrendondado é " + Math.floor(digito))

//Questão 26
const numInt = Number(prompt("Digite um número inteiro"))
let numIntAdicionado = numInt + 10
let numString = numIntAdicionado.toString()

console.log(numString +  " é do tipo " + typeof numString)

//Questão 27
const dataNascimento = prompt("Digite sua data de nascimento. Exemplo: 'dd/mm/aaaa': ")
let dataSeparada: string[] = []

if (dataNascimento != null) {
  dataSeparada = dataNascimento.split("/")
}

let dia: number = parseInt(dataSeparada[0])
let mes: number = parseInt(dataSeparada[1])
let ano: number = parseInt(dataSeparada[2])

console.log("Dia: "+ dia + ", Mês: " + mes + ", Ano: " + ano)

//Questão 28
const estado = prompt("Você já disse a cidade em que mora, agora diga qual o estado: ")

console.log("Você mora em " + cidade + ", " + "estado.")

//Questão 29
console.log("Bem-vindo ao nosso programa, nascido em " + anoNascimento)

//Questão 30
const dados1 = Number(prompt("Digite um número inteiro: "))
const dados2 = prompt("Digite uma string: ")

console.log("Dados concatenados: " + dados1 + " " + dados2)

//Questão 31
const produto = prompt("Digite o produto: ")
const preco = prompt("Digite o preço do produto: ")

console.log("Resumo pedido: " + produto + ", R$" +preco)

//Questão 32
console.log("O dobro de " + numInt + " é igual a " + numInt ** 2)

//Questão 33
const email = prompt("Digite seu e-mail: ")
console.log("Obrigada por se inscrever. Continuaremos enviando notícias para o e-mail: " + email)

//Questão 34

console.log("A soma de" + num + " + " + numInt + " é " + (num + numInt))
console.log("A diferença de" + num + " + " + numInt + " é " + Math.abs(num - numInt))
console.log("O produto de" + num + " + " + numInt + " é " + (num * numInt))
console.log("O quociente de" + num + " + " + numInt + " é " + (num / numInt))

//Questão 35
const baseTriangulo1 = Number(prompt("Digite a base do triangulo: "))
const alturaTriangulo1 = Number(prompt("Digite a altura do triangulo: "))
const areaTriangulo1 = baseTriangulo1 * alturaTriangulo1
console.log("A base do triângulo é " + areaTriangulo1)

//Questão 36
const raio = Number(prompt("Digite o raio de uma circunferência: "))
const pi = 3.14
const perimetro = 2 * pi * raio

console.log(perimetro)

//Questão 37
console.log("O perímetro do triângulo 1 é: " + 2 * (baseTriangulo + alturaTriangulo))

//Questão 38
console.log("A média aritmética entre os três números decimais já digitados aqui é: " + (decimal + numeroDecimal1 + numeroDecimal2 / 3))

//Questão 39
console.log(primeiroNome + ", você já viveu " + idade2 * 365 + " dias e " + idade2 * 12 + " meses.")

//Questão 40
const valorReal = Number(prompt("Digite o valor valor em real: "))
const cotacaoDolar = Number(prompt("Digite a cotação do dólar atualmente: "))
const valorDolar = valorReal * cotacaoDolar

console.log(valorDolar)

// Questão 41 
console.log("O número decimal " + decimal + "convertido para o número mais próximo é: " + Math.ceil(decimal))

// Questão 42
console.log("O resultado da operação com três números inteiros ((n1 + n2) * n3) é: " + (num + numero3) * numInt)

// Questão 43
const temperatura = Number(prompt("Digite uma temperatura em graus Celsius: "))
const temperaturaConvertida = (temperatura * 9 / 5) + 32

console.log(temperaturaConvertida)

