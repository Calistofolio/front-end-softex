//Questão 1
let inteiro = Number(prompt("Digite um número inteiro: "))

if (inteiro > 0) {
    console.log("O número é positivo.")
} else 
if (inteiro < 0) {
    console.log("O número é negativo.")
} else{
    console.log("O número é 0")
}

//Questão 2
let idade = Number(prompt("Digite sua idade: "))

if (idade >= 18) {
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

//Questão 3
inteiro = Number(prompt("Digite o primeiro número inteiro: "))
let inteiro2 = Number(prompt("Digite o segundo número inteiro: "))

if (inteiro > inteiro2) {
    console.log(`${inteiro} é maior que ${inteiro2}.`)
} else 
if (inteiro < inteiro2) {
    console.log(`${inteiro2} é maior que ${inteiro}.`)
} else{
    console.log(`${inteiro} e ${inteiro2} são iguais.`)
}

//Questão 4
if (inteiro % 2 == 0) {
    console.log(`${inteiro} é par.`)
} else {
    console.log(`${inteiro} é impar.`)
}

//Questão 5
let nota = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let nota3 = Number(prompt("Digite a terceira nota: "))

let media = (nota + nota2 + nota3)/3

if (media >= 7) {
    console.log(`Aprovado. Média: ${media}`)
} else {
    console.log(`Reprovado. Média: ${media}`)
}

//Questão 6
let nome = String(prompt("Digite o nome da primeira pessoa: "))
let nome2 = String(prompt("Digite o nome da segunda pessoa: "))

if (nome.length > nome2.length) {
    console.log(`${nome} possui mais caracteres: ${nome.length}`)
} else if (nome2.length > nome.length) {
    console.log(`${nome2} possui mais caracteres: ${nome2.length}`)
} else {
    console.log(`${nome} e ${nome2} possuem a mesma quantidade de caracteres: ${nome2.length}`)
}

//Questão 7
let letra = String(prompt("Digite uma letra: "))
const vogais = ["a", "e", "i", "o", "u"] as any

if (vogais.indexOf[letra] !== -1) {
    console.log(`É uma vogal: ${letra}`)
} else {
    console.log(`É uma consoante: ${letra}`)
}

//Questão 8
let numero = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))
let numero3 = Number(prompt("Digite o terceiro número: "))

if (numero > numero2 &&  numero2 > numero3) {
    console.log(numero, numero2, numero3)
} else 
 if (numero > numero3 &&  numero3 > numero2) {
    console.log(numero, numero3, numero2)
} else 
 if (numero2 > numero &&  numero > numero3) {
   console.log(numero2, numero, numero3)
} else 
 if (numero2 > numero3 &&  numero3 > numero) {
   console.log(numero2, numero3, numero)
} else 
if (numero3 > numero &&  numero > numero2) {
   console.log(numero3, numero, numero2)
} else 
if (numero3 > numero2 &&  numero2 > numero) {
   console.log(numero3, numero2, numero)
} else{
    console.log(numero, numero2, numero3)
}

//Questão 9
let peso = Number(prompt("Digite seu peso: "))
let altura = Number(prompt("Digite sua altura: "))

let imc : number = peso/altura**2

if (imc < 18.5) {
    console.log(`Magreza. IMC: ${imc.toFixed(1)}`)
} else 
if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Normal. IMC: ${imc.toFixed(1)}`)
} else 
if (imc >= 25.0 && imc <= 29.9) {
    console.log(`Sobrepeso. IMC: ${imc.toFixed(1)}`)
} else 
if (imc >= 30.0 && imc <= 39.9) {
    console.log(`Obesidade. IMC: ${imc.toFixed(1)}`)
} else {
    console.log(`Obesidade grave. IMC: ${imc.toFixed(1)}`)
}

//Questão 10
let numeroMes = Number(prompt("Digite o número do mês: "))
let meses : string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

console.log(`Mês: ${numeroMes}, ${meses[numeroMes - 1]}`)

//Questão 11
let salario = Number(prompt("Digite seu salário: "))

if (salario < 1.500) {
    console.log(`Seu novo salário é: ${salario * 0.15}`)
} else {
    console.log(`Seu novo salário é: ${salario * 0.10}`)
}

//Questão 12
inteiro = Number(prompt("Digite um numero inteiro: "))

if (inteiro/3 == 0 && inteiro/5 == 0) {
    console.log("O número é divisivel por 3 e por 5.")
}

//Questão 13
let diaDaSemana = String(prompt("Digite um dia da semana"))
if (diaDaSemana.toLowerCase() == "sábado" || diaDaSemana.toLowerCase() == "domingo") {
    console.log(`${diaDaSemana}, fim de semana!`)
} else {
    console.log(`${diaDaSemana}, dia útil...`)
}

//Questão 14
inteiro = Number(prompt("Digite um número de 1 até 5: "))

switch (inteiro) {
    case 1:
        console.log("Muito insuficiente")
    break;
    case 2:
        console.log("Insuficiente") 
    break;          
    case 3:
        console.log("Regular")    
    break;
    case 4:
        console.log("Bom")
    break;
    case 5:
        console.log("Muito bom")    
    break;

    default:
        console.log("Opção não encontrada.")
        break;
}

//Questão 15

inteiro = Number(prompt("Digite um número de 1 até 7: "))

switch (inteiro) {
    case 1:
        console.log("Domingo")
    break;
    case 2:
        console.log("Segunda") 
    break;          
    case 3:
        console.log("Terça")    
    break;
    case 4:
        console.log("Quarta")
    break;
    case 5:
        console.log("Quinta")    
    break;
    case 6:
        console.log("Sexta")    
    break;
    case 7:
        console.log("Sábado")    
    break;

    default:
        console.log("Opção não encontrada.")
        break;
}

//Questão 16

//Questão 17
idade = Number(prompt("Digite sua idade: "))

if (idade == 0 || idade == 1) {
    console.log(`Bebê. ${idade} anos.`)
} else 
if (idade <= 12 && idade > 1) {
    console.log(`Criança. ${idade} anos.`)
} else 
if (idade >= 13 && idade <= 18) {
    console.log(`Adolescente. ${idade} anos.`)
} else {
    console.log(`Adulto. ${idade} anos.`)
}

//Questão 18

//Questão 19

//Questão 20

//Questão 21

