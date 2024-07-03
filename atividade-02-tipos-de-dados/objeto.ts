//Questão 1
type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
}

let pessoa1: Pessoa = {
    nome: "Luana",
    idade: 21,
    endereco: "São Lourenço da Mata, PE",
}

//Questão 2
console.log(pessoa1.nome)

//Questão 3

//Questão 4
pessoa1.idade = 20

//Questão 5
type Animal = {
    nome: string;
    especie: string;
    cor: string;
}

let animal1: Animal = {
    nome: "Cavalo",
    especie: "Cavalo",
    cor: "Bege",
}

//Questão 6
type Livro = {
    titulo: string;
    autor: string;
    ano: number;
}

let livro1: Livro = {
    titulo: "Dracula",
    autor: "Bram Stoker",
    ano: 1896,
}

//Questão 7
console.log(livro1.autor)

//Questão 8
livro1.ano = 1897

//Questão 9

//Questão 10
type Carro = {
    marca: string;
    modelo?: string;
    ano: number;
}

let carro1: Carro = {
    marca: "Hyundai",
    modelo: "HB20",
    ano: 2013,
}

console.log(carro1)

//Questão 11
carro1.modelo = undefined
console.log(carro1)