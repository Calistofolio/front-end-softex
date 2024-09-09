//Questão 01
console.log('Estudar é muito bom');
console.log('Paciência e persistência');
console.log('Revisão é a mãe do aprendizado');

console.log('Estudar é muito bom');
console.log('Paciência e persistência');
console.log('Revisão é a mãe do aprendizado');

console.log('Estudar é muito bom');
console.log('Paciência e persistência');
console.log('Revisão é a mãe do aprendizado');

//Questão 02
function criarFrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}

criarFrases();
criarFrases();
criarFrases();

//Questão 03
function soma(num1: number, num2: number){
    console.log(num1 + num2)
}

soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);

//Questão 04
function soma2(num1: number, num2: number){
    return num1 + num2
}

let teste1 = soma2(10, 15);
console.log(teste1);

let teste2 = soma2 (10, 20) + soma2 (30, 50);
console.log(teste2);

console.log(soma2(50, 50));

//Questão 05
function soma3(num1: number, num2: number){
    return num1 + num2
}

let a = Number(prompt("Digite o primeiro número: "));
let b = Number(prompt("Digite o segundo número: "));

soma3(a, b);

//Questão 06
function isPar(numero: number){
    if (numero % 2 == 0){
        return true
    } else {
        return false
    }
}

a = Number(prompt("Digite um número: "));
isPar(a);

//Questão 07
function media(nota1: number, nota2: number, nota3: number): number {
    const soma = nota1 + nota2 + nota3;
    const mediaAritmetica = soma / 3;
    return mediaAritmetica;
}

a = Number(prompt("Digite primeira nota: "));
b = Number(prompt("Digite a segunda nota: "));
let c = Number(prompt("Digite a terceira nota: "));
const resultado = media(a, b, c);
console.log(`A média aritmética é: ${resultado}`);

//Questão 08
function imc(peso: number, altura: number): number {
    const formula = peso / (altura * altura);
    return formula;
}

let altura = Number(prompt("Digite sua altura: "));
let peso = Number(prompt("Digite seu peso: "));

const resultadoQ08 = imc(peso, altura)
console.log(`O seu IMC é de ${resultadoQ08}`)

//Questão 09
function calcularDesconto(valorProduto: number, percentualDesconto: number): number {
    const desconto = (valorProduto * percentualDesconto) / 100;
    const valorFinal = valorProduto - desconto;
    return valorFinal;
}

//Questão 10
function calcularImpostoRenda(salarioBruto: number): number {
    let imposto = 0;

    if (salarioBruto <= 1903.98) {
        imposto = 0;
    } else if (salarioBruto <= 2826.65) {
        imposto = (salarioBruto - 1903.98) * 0.075;
    } else if (salarioBruto <= 3751.05) {
        imposto = (2826.65 - 1903.98) * 0.075 + (salarioBruto - 2826.65) * 0.15;
    } else if (salarioBruto <= 4664.68) {
        imposto = (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (salarioBruto - 3751.05) * 0.225;
    } else {
        imposto = (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (4664.68 - 3751.05) * 0.225 + (salarioBruto - 4664.68) * 0.275;
    }

    return imposto;
}

//Questão 11
function calcularMediaArredondada(numeros: number[]): number {
    if (numeros.length === 0) {
        throw new Error("A lista de números não pode estar vazia.");
    }

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    const media = soma / numeros.length;
    const mediaArredondada = Math.round(media);

    return mediaArredondada;
}

//Questão 12
function contarDigitosParesImpares(numero: number): { pares: number, impares: number } {
    let pares = 0;
    let impares = 0;

    const numeroString = (numero).toString(); // Convertendo o número para string para iterar pelos dígitos

    for (let i = 0; i < numeroString.length; i++) {
        const digito = parseInt(numeroString[i], 10);
        
        if (digito % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}


//Questão 13
type Aluno = {
    nome: string;
    nota: number;
};

function calcularMediaAlunos(alunos: Aluno[]): number {

    let somaNotas = 0;
    for (let i = 0; i < alunos.length; i++) {
        somaNotas += alunos[i].nota;
    }

    const media = somaNotas / alunos.length;
    return media;
}


//Questão 14
function calcularIdade(anoNasc: number, anoAtual: number = 2024): number {
    const idade = anoAtual - anoNasc
    return idade;
}

//Questão 15
let contador = 1
let tabuada = 6

function gerarTabuada() {
    for (let contador = 1; contador <= 10; contador++) {
        let valorTabuada = tabuada * contador
        
        console.log(`${tabuada} X ${contador} = ${valorTabuada}`)
    }
    
}

//Questão 16
function advinheNumero(): void {
    const numeroCorreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let palpite: number | null = null;

    while (palpite !== numeroCorreto) {
        palpite = parseInt(prompt("Adivinhe um número entre 1 e 100: ") || "0");
        tentativas++;

        if (palpite < numeroCorreto) {
            console.log("O número correto é maior!");
        } else if (palpite > numeroCorreto) {
            console.log("O número correto é menor!");
        } else {
            console.log(`Parabéns! Você acertou o número ${numeroCorreto} em ${tentativas} tentativas.`);
        }
    }
}

//Questão 17
function verificarPropriedade(obj: Record<string, any>, propriedade: string): boolean {
    return obj.hasOwnProperty(propriedade);
}

//Questão 18
function calcularPrecoProduto(valorCusto: number, margemLucro: number, valorFrete: number): number {
    const lucro = valorCusto * (margemLucro / 100);
    const precoVenda = valorCusto + lucro + valorFrete;
    return precoVenda;
}

//Questão 19
function encontrarPalavraMaisLonga(frase: string): string {
    const palavras = frase.split(' ');
    let palavraMaisLonga = '';

    for (const palavra of palavras) {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    }

    return palavraMaisLonga;
}


//Questão 20
function imprimirEmQuadro(lista: string[]): void {
    const comprimentoMaximo = Math.max(...lista.map(str => str.length));

    const borda = '*'.repeat(comprimentoMaximo + 4);

    console.log(borda);

    for (const str of lista) {
        const espacosRestantes = comprimentoMaximo - str.length;
        console.log(`* ${str}${' '.repeat(espacosRestantes)} *`);
    }

    console.log(borda);
}


//Questão 21
function filtrarStringsLongas(array: string[]): string[] {
    return array.filter(str => str.length > 5);
}

//Questão 22
interface Livro {
    titulo: string;
    autor: string;
    ano: number;
    [key: string]: any;
}

function filtrarLivrosPorAutor(livros: Livro[], autor: string): Livro[] {
    return livros.filter(livro => livro.autor === autor);
}


//Questão 23
interface Pessoa {
    nome: string;
    idade: number;
    [key: string]: any;
}

function encontrarPessoaMaisVelha(pessoas: Pessoa[]): string {
    if (pessoas.length === 0) {
        throw new Error("O array de pessoas está vazio.");
    }

    const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) => {
        return (pessoaAtual.idade > maisVelha.idade) ? pessoaAtual : maisVelha;
    });

    return pessoaMaisVelha.nome;
}

//Questão 24
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    [key: string]: any; // Permite propriedades adicionais
}

function filtrarCarrosPorAno(carros: Carro[], anoEspecifico: number): Carro[] {
    return carros.filter(carro => carro.ano > anoEspecifico);
}

//Questão 25
function inverterString(s: string): string {
    return s.split('').reverse().join('');
}