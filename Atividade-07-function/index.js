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
    console.log('Estudar é muito bom');
    console.log('Paciência e persistência');
    console.log('Revisão é a mãe do aprendizado');
}
criarFrases();
criarFrases();
criarFrases();
//Questão 03
function soma(num1, num2) {
    console.log(num1 + num2);
}
soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);
//Questão 04
function soma2(num1, num2) {
    return num1 + num2;
}
var teste1 = soma2(10, 15);
console.log(teste1);
var teste2 = soma2(10, 20) + soma2(30, 50);
console.log(teste2);
console.log(soma2(50, 50));
//Questão 05
function soma3(num1, num2) {
    return num1 + num2;
}
var a = Number(prompt("Digite o primeiro número: "));
var b = Number(prompt("Digite o segundo número: "));
soma3(a, b);
//Questão 06
function isPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
a = Number(prompt("Digite um número: "));
isPar(a);
//Questão 07
function media(nota1, nota2, nota3) {
    var soma = nota1 + nota2 + nota3;
    var mediaAritmetica = soma / 3;
    return mediaAritmetica;
}
a = Number(prompt("Digite primeira nota: "));
b = Number(prompt("Digite a segunda nota: "));
var c = Number(prompt("Digite a terceira nota: "));
var resultado = media(a, b, c);
console.log("A m\u00E9dia aritm\u00E9tica \u00E9: ".concat(resultado));
//Questão 08
function imc(peso, altura) {
    var formula = peso / (altura * altura);
    return formula;
}
var altura = Number(prompt("Digite sua altura: "));
var peso = Number(prompt("Digite seu peso: "));
var resultadoQ08 = imc(peso, altura);
console.log("O seu IMC \u00E9 de ".concat(resultadoQ08));
//Questão 09
function calcularDesconto(valorProduto, percentualDesconto) {
    var desconto = (valorProduto * percentualDesconto) / 100;
    var valorFinal = valorProduto - desconto;
    return valorFinal;
}
//Questão 10
function calcularImpostoRenda(salarioBruto) {
    var imposto = 0;
    if (salarioBruto <= 1903.98) {
        imposto = 0;
    }
    else if (salarioBruto <= 2826.65) {
        imposto = (salarioBruto - 1903.98) * 0.075;
    }
    else if (salarioBruto <= 3751.05) {
        imposto = (2826.65 - 1903.98) * 0.075 + (salarioBruto - 2826.65) * 0.15;
    }
    else if (salarioBruto <= 4664.68) {
        imposto = (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (salarioBruto - 3751.05) * 0.225;
    }
    else {
        imposto = (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (4664.68 - 3751.05) * 0.225 + (salarioBruto - 4664.68) * 0.275;
    }
    return imposto;
}
//Questão 11
function calcularMediaArredondada(numeros) {
    if (numeros.length === 0) {
        throw new Error("A lista de números não pode estar vazia.");
    }
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    var media = soma / numeros.length;
    var mediaArredondada = Math.round(media);
    return mediaArredondada;
}
//Questão 12
function contarDigitosParesImpares(numero) {
    var pares = 0;
    var impares = 0;
    var numeroString = (numero).toString(); // Convertendo o número para string para iterar pelos dígitos
    for (var i = 0; i < numeroString.length; i++) {
        var digito = parseInt(numeroString[i], 10);
        if (digito % 2 === 0) {
            pares++;
        }
        else {
            impares++;
        }
    }
    return { pares: pares, impares: impares };
}
function calcularMediaAlunos(alunos) {
    var somaNotas = 0;
    for (var i = 0; i < alunos.length; i++) {
        somaNotas += alunos[i].nota;
    }
    var media = somaNotas / alunos.length;
    return media;
}
//Questão 14
function calcularIdade(anoNasc, anoAtual) {
    if (anoAtual === void 0) { anoAtual = 2024; }
    var idade = anoAtual - anoNasc;
    return idade;
}
//Questão 15
var contador = 1;
var tabuada = 6;
function gerarTabuada() {
    for (var contador_1 = 1; contador_1 <= 10; contador_1++) {
        var valorTabuada = tabuada * contador_1;
        console.log("".concat(tabuada, " X ").concat(contador_1, " = ").concat(valorTabuada));
    }
}
//Questão 16
function advinheNumero() {
    var numeroCorreto = Math.floor(Math.random() * 100) + 1;
    var tentativas = 0;
    var palpite = null;
    while (palpite !== numeroCorreto) {
        palpite = parseInt(prompt("Adivinhe um número entre 1 e 100: ") || "0");
        tentativas++;
        if (palpite < numeroCorreto) {
            console.log("O número correto é maior!");
        }
        else if (palpite > numeroCorreto) {
            console.log("O número correto é menor!");
        }
        else {
            console.log("Parab\u00E9ns! Voc\u00EA acertou o n\u00FAmero ".concat(numeroCorreto, " em ").concat(tentativas, " tentativas."));
        }
    }
}
//Questão 17
function verificarPropriedade(obj, propriedade) {
    return obj.hasOwnProperty(propriedade);
}
//Questão 18
function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
    var lucro = valorCusto * (margemLucro / 100);
    var precoVenda = valorCusto + lucro + valorFrete;
    return precoVenda;
}
//Questão 19
function encontrarPalavraMaisLonga(frase) {
    var palavras = frase.split(' ');
    var palavraMaisLonga = '';
    for (var _i = 0, palavras_1 = palavras; _i < palavras_1.length; _i++) {
        var palavra = palavras_1[_i];
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    }
    return palavraMaisLonga;
}
//Questão 20
function imprimirEmQuadro(lista) {
    var comprimentoMaximo = Math.max.apply(Math, lista.map(function (str) { return str.length; }));
    var borda = '*'.repeat(comprimentoMaximo + 4);
    console.log(borda);
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var str = lista_1[_i];
        var espacosRestantes = comprimentoMaximo - str.length;
        console.log("* ".concat(str).concat(' '.repeat(espacosRestantes), " *"));
    }
    console.log(borda);
}
//Questão 21
function filtrarStringsLongas(array) {
    return array.filter(function (str) { return str.length > 5; });
}
function filtrarLivrosPorAutor(livros, autor) {
    return livros.filter(function (livro) { return livro.autor === autor; });
}
function encontrarPessoaMaisVelha(pessoas) {
    if (pessoas.length === 0) {
        throw new Error("O array de pessoas está vazio.");
    }
    var pessoaMaisVelha = pessoas.reduce(function (maisVelha, pessoaAtual) {
        return (pessoaAtual.idade > maisVelha.idade) ? pessoaAtual : maisVelha;
    });
    return pessoaMaisVelha.nome;
}
function filtrarCarrosPorAno(carros, anoEspecifico) {
    return carros.filter(function (carro) { return carro.ano > anoEspecifico; });
}
//Questão 25
function inverterString(s) {
    return s.split('').reverse().join('');
}
