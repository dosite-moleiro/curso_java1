console.log('Dosité');
console.log('Bem vindo ao curso');
let idade = 35;
console.log(idade);
let altura = 1.80;
console.log(altura);
let nome = 'João'; // String
let peso = 93; // Number
let estaAprovado = true; // Boolean
let sobrenome; // Undefined
let corSelecionada = null; // Redefinir um valor    
let pessoa = {
    name: 'Dosité',
    idade: 35,
    peso: 93,
    sobrenome: 'Moleiro'
    
};
console.log(pessoa);
//Arrays
let familia = ['Dosité', 'Ísis', 'Priscila', true, 10];
console.log(familia[1]);
console.log(familia.length);

//Functions
//Verbo + Substantivo
//Tipos:
//Realizar uma tarefa e não retornar nada
function dizerNome() {
    console.log('Dosité');
}

dizerNome();

//Realizar uma tarefa e retornar algo
function multiplicarPorDois(valor) {
    return valor * 2;
}
let resultado = multiplicarPorDois(5);
console.log(resultado); 

//Operadores Aritméticos (matemáticos) +, -, *, /, **, ++, --
//Operadores de atribuição =
//Operadores de comparação ===, ==
//Operadores ternários (condição) ? true : false
//Operadores lógicos && (os dois precisam ser verdadeiros), || (pelo menos um), ! (negação) 
//Operadores bitwise &, |, ^, ~, <<, >>, >>>

//Não boolean, truthy ou falsy
//Falsy: undefined, null, 0, false, '', NaN
//Truthy: Qualquer valor que não seja falsy 

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);

//Swapping (troca de valores)
let a = 'vermelho';
let b = 'azul';

console.log(a);
console.log(b);

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


//if e else
//Se a hora estiver entre 06:00 até 12:00 : Bom dia!
//Se a hora estiver entre 12:00 até 18:00 : Boa tarde!
//Caso contrário : Boa noite!   

let hora = 21;

if (hora >= 6 && hora < 12) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}

//Switch case
let permissao; // comum, gerente, diretor

permissao = 'gerente';

switch (permissao) {
    case 'comum':
        console.log('Usuário comum');
        break;
    case 'gerente':
        console.log('Usuário gerente');
        break;
    case 'diretor':
        console.log('Usuário diretor');
        break;
    default:
        console.log('Usuário não reconhecido');
}

//Loops
//Tipos: for, while, do...while, for...in, for...of
//For
for (let i = 0; i < 5; i++) {
    console.log('Estou Aprendendo', i);
}   
//While
let i = 0;
while (i < 5) {
    console.log('Estou Aprendendo', i);
    i++;
}   

//Escreva uma função que usa dois números para retornar o maior

let maior = max(5, 10);

console.log(maior); 

function max(a, b) {
    if (a > b) 
        return a;
     else 
        return b;
}

//Exercício nota escolar
//Obter a média a partir de um array
//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70, 80, 90];
console.log(mediaDoAluno(array));

function calcularMedia(notas) {
    const total = notas.reduce((soma, nota) => soma + nota, 0);
    return total / notas.length;
}

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 60) return 'F';
    if (media < 70) return 'D';
    if (media < 80) return 'C';
    if (media < 90) return 'B';
    return 'A';
}

//Factory function (Função Fábrica)
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...');
        }
    };
}  

const celular = criarCelular('Iphone 13', 6.1, 3095);
console.log(celular);

//camelCAse (exemploDeVariavel)
//PascalCase (ExemploDeClasse)

//Natureza dinâmica de Objetos

const mouse = {
    cor: 'preto',
    marca: 'TGT',
}
mouse.velocidade = 5000;
delete mouse.velocidade;

console.log(mouse);

//Math
//Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.
//Propriedades: Math.E, Math.PI
//Métodos: Math.abs(), Math.round(), Math.ceil(), Math.floor(), Math.random(), Math.min(), Math.max()

Math.random(); // Retorna um número aleatório entre 0 e 1
Math.max(1, 2, 3, 4, 5); // Retorna o maior número

console.log(Math.random());
console.log(Math.max(1, 2, 3, 4, 5));

//Strings
//Tipo primitivo
//Tipo objeto

const mensagem = 'Olá, mundo!'; // Tipo primitivo
const outraMensagem = new String('Olá, mundo!'); // Tipo objeto

console.log(mensagem);
console.log(outraMensagem);

//Template literal ``
const nomeUsuario = 'Dosité';
const mensagemTemplateLiteral = `Olá, ${nomeUsuario}! 
Bem-vindo ao curso.`;
console.log(mensagemTemplateLiteral);

//Date
const dataAtual = new Date();
console.log(dataAtual);

//Criar um objeto de endereço
//Propriedades: rua, cidade, CEP, país

const endereco = {
    rua: 'Ribeira',
    cidade: 'Salvador',
    cep: '40000-000',
    pais: 'Brasil'
};
//Exibir o endereço completo com function e for

function exibirEndereco(endereco) {
    for (let chave in endereco) {
        console.log(chave, endereco[chave]);
    }
}

exibirEndereco(endereco);

//Exercício de faixa de preço
//Criar um array de objetos de faixa de preço para que possa ser usado em um e-commerce.
//Propriedades: tooltip, minimo, maximo

let faixas = [
    { tooltip: 'até R$700', minimo: 0, maximo: 700 },
    { tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000 },
    { tooltip: 'de R$1000 a R$2000', minimo: 1000, maximo: 2000 },
    { tooltip: 'acima de R$2000', minimo: 2000, maximo: Infinity }
];
console.log(faixas);

//essa função acima cobre o que foi pedido? Sim, a função acima cria um array de objetos chamado "faixas", onde cada objeto representa uma faixa de preço com as propriedades "tooltip", "minimo" e "maximo". Isso atende ao requisito de criar um array de objetos de faixa de preço para uso em um e-commerce. Cada faixa de preço é claramente definida, permitindo que seja utilizada para filtrar produtos ou exibir informações de preço aos usuários.


//Adicionado elementos ao array

const numeros = [1, 2, 3, 4, 5];
//Adicionar no meio do array
numeros.splice(2, 0, 'a');
console.log(numeros);   

//Encontrando elementos no array
const numeros2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(numeros2.indexOf(2)); //Retorna o índice do primeiro elemento encontrado
console.log(numeros2.lastIndexOf(5)); //Retorna o índice do último elemento encontrado
console.log(numeros2.includes(3)); //Retorna true se o elemento for encontrado, caso contrário retorna false  


//Arrow function
const soma = (a, b) => a + b;
console.log(soma(5, 10));   

//Removendo elementos em uma array
const numeros3 = [1, 2, 3, 4, 5];

//No final do array
const ultimoElemento = numeros3.pop();
console.log(ultimoElemento);
console.log(numeros3);

//No início do array
const primeiroElemento = numeros3.shift();
console.log(primeiroElemento);
console.log(numeros3);

//Esvaziando array

let numeros4 = [1, 2, 3, 4, 5];
numeros4.length = 0;
console.log(numeros4); 

//Combinando arrays
const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];  
const combinado = primeiro.concat(segundo); 
console.log(combinado);

//Cortando arrays
const cortado = combinado.slice(2, 5);
console.log(cortado);

//Operador spread
const primeiro2 = [1, 2, 3];
const segundo2 = [4, 5, 6];
const combinado2 = [...primeiro2, ...segundo2];
console.log(combinado2);

//Foreach
const numeros5 = [1, 2, 3, 4, 5];
numeros5.forEach(element => console.log(element));

prompt('Qual a sua cor favorita?'); // Prompt é usado para exibir uma caixa de diálogo que solicita ao usuário que insira um valor. O valor inserido pelo usuário é retornado como uma string.  
