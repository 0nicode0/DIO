/*Variáveis e Operadores*/
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(`O quanto você irá pagar é de: ${valorGasto}`);

/*Obs: .toFixed(num) quantidades de casas decimais, arredondar...*/


/*Estruturas condicionais*/
/*Boolean*/
const camisetalistrada = true;
const camisetaXadrez = false;

/*Resto, if*/
const numero = 3;

const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log('Par');
}else {
    console.log('Impar');
}

/*Funções*/
/*Exemplo 1:*/
function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Nicoly');
sayMyName('Bruno');

/*Exemplo 2 acrescimo:*/
function incrementar(valor , percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) + valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementar(100, 10));
console.log(incrementar(100, 15));
console.log(incrementar(100, 20)); */

/*Objetos e classes*/
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Jorjana', 30);
const renan = new Pessoa('Jorge', 30);

compararPessoas(vitor, renan); */

/* Arrays e estruturas de repetição*/
const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);