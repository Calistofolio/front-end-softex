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
for (let i = 0; i < 10; i++) {
    console.log("Testando uma frase!") 
  }
  
  //Questão 6
  
  for (let i = 0; i < 10; i++) {
    console.log(i) 
  }
  
  //Questão 7
  
  for (let i = 0; i < 10; i++) {
    if (i == 5){
        break;
    }
    console.log(i)
  }
  
  //Questão 8
  
  for (let i = 0; i < 10; i++) {
    if (i == 5){
        continue;
    }
    console.log(i)
  }
  
  //Questão 9
  
  let nomes = ['João',
    'Paulo',
    'Pedro',
    'Gustavo',
    'Maria']
  
    for(let n of nomes){
        console.log(n)
    }
  
  //Questão 10
  
  for (let i = 1; i <= 10; i++){
    console.log(i)
  }
  
  //Questão 11
  
  for (let i = 10; i >= 1 ; i--){
    console.log(i)
  }
  
  //Questão 12
  
  let resultado: number = 0
  
  for (let i = 1; i<=100; i++){
    resultado += i
  }
  
  console.log(resultado)
  
  //Questão 13
  
  for (let i = 1; i<=50;i++){
    if (i % 2 == 0) {
        console.log(i)
    }
  }
  
  //Questão 14
  
  let resultado1: number = 1
  
  for (let i = 1; i<=5; i++){
    resultado1 *= i
  }
  
  console.log(resultado1)
  
  //Questão 15
  
  let resultadoTabuada: number = 7
  
  for (let i = 1; i<=10; i++){
    console.log(`${resultadoTabuada * i}`)
  }
  
  //Questão 16 
  
  let total : number = 0

  
  for (let index = 1; index <= 5; index++) {
    let nota = Number(prompt("Digite a nota "))

    total += nota
    
  }
  console.log(`Média = ${total/5}`)
  
  //Questão 17
  
  let n: number = 3
  
  for (let i = 50; i >= 1; i--){
    if (i % n == 0){
        console.log(i)
    }
  }
  
  //Questão 18
  
  let maior : number | null = null;
  let menor : number | null = null;

  for (let index = 1; index <= 10; index++) {
     let numeros = Number(prompt("Digite o número"))

    if (maior == null || numeros > maior) {
        maior = numeros
    }

    if (menor == null || numeros < menor) {
        menor = numeros
    }
  }
 
  console.log(`Maior numero digitado: ${maior}. Menor numero: ${menor}`)
  

  
  //Questão 19
  
  for (let i = 1; i <= 100; i++){
    if (i % 2 != 0){
        console.log(i)
    }
  }
  
  //Questão 20
  
  let contador: number = 0
  
  for (let i = 1; i <= 5; i++){

    let nota = Number(prompt("Digite a nota."))

    if (nota >= 7){
        contador++
    }
  }
  console.log(`O total de alunos aprovados foi de ${contador}`)
  
  //Questão 21 
  
  let num = prompt("Digete um número de dois digitos:")
  
  const resultado2 = num?.split("")
  
  if (resultado2 != undefined){ 
      let soma = 0

      for (let i of resultado2){
          soma += Number(i)
      }
      console.log(soma)
  }
  
  //Questão 22
  
  let inteiro: number = 4
  
  for (let i = 1; i <= inteiro; i++){
    if (inteiro % i == 0){
        console.log(i)
    }
  }
  
  //Questão 23

  let media : number = 0
  for (let index = 1; index <= 5; index++) {
    let altura = Number(prompt("Digite a altura: "))
    media += altura
  }
  
  console.log(`A média das alturas inseridas foi: ${media}`)
  
  //Questão  24
  
  for (let i = 100; i >= 1; i--){
    if (i % 3 == 0){
        console.log("Fizz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    } else if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
  }
  
  //Questão 25 
  
  let digito = prompt("Digete um número de dois digitos: ")
  
  const resultadoDigito = digito?.split("")
  
  if (resultadoDigito != undefined){ 
      let soma = 0
      for (let i of resultadoDigito){
        if (Number(i) % 2 == 0){
          soma += Number(i)
        }
      }
      console.log(`TESTE ${soma}`)
  }
  
  //Questão 26
  
  let numero = prompt("Digite um número")
  
  if (numero != null) {
    console.log(numero.split(""))
      let invertido = Number(numero.split("").reverse().join(""))
  
      console.log(`Número invertido: ${invertido}`)
  }