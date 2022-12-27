/*para executar no console, use os comentários :) */

/*Exercício com variáveis*/
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(`O quanto você irá pagar é de: ${valorGasto}`); 


/*Exercício com condições*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmLitros = 10;
const disKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsu = disKm / kmLitros;

if (tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsu * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


/*Média*/
const nota1 = 5;
const nota2 = 3;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5){
    console.log('Que pena! Vocẽ foi reprovado(a)!');
}else if (media >=5 && media <=7){
    console.log('Você está de recuperação!');
}else{
    console.log('Parabéns! Você foi aprovado(a)!');
} 

/*imc*/
const peso = 44;
const altura = 1.65;
const imc = peso / Math.pow(altura,2);
console.log(imc)

if(imc < 18.5){
    console.log('Você está abaixo do peso.')
}else if (imc >= 18.5 && imc < 25){
    console.log('Você está no peso ideal para sua altura.')
}else if (imc >= 25 && imc <= 30) {
    console.log('Você está acima do peso.');
} else if (imc >= 30 && imc < 40) {
    console.log('Você está obeso')
}else{
    console.log('Você está com obesidade grave.')
} 

/*Outro exercício...*/
let nomeDoAluno = 'Renan Johannsen de Paula';
    console.log(nomeDoAluno);

    nomeDoAluno = 'Vitor Johansen Guerra';
    console.log(nomeDoAluno); 

/*imc com função*/
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
if(imc < 18.5){
    return'Você está abaixo do peso.';
}else if (imc >= 18.5 && imc < 25){
    return 'Você está no peso ideal para sua altura';
}else if (imc >= 25 && imc <= 30) {
    return 'Você está acima do peso.';
} else if (imc >= 30 && imc < 40) {
    return 'Você está obeso';
}else{
    return'Você está com obesidade grave.';
}
}

(function(){
const peso = 64;
const altura = 1.73;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
})();

/*Mais um exercício com função*/
function escravaNome(nome) {
    console.log('Meu nome é: ' + nome)
}

escravaNome('Nicoly');

function vereficarIdade(idade){
    if(idade >= 18){
        console.log('Maior de idade.')
    }else {
        console.log('Menor de idade.')
    }
}

vereficarIdade(10);

/*Objetos e classes exercício*/
class Carros {
    marca; 
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distancia, precoCombustivel){
    return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carros('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));
const palio = new Carros('Fiat', 'Preto', 1 / 10);
console.log(uno.calcularGastoDePercurso(60, 5)); 

/* Arrays e estruturasrepetição*/
/*Exercício 1*/
const num = 9;
for (let i = 1; i < 10; i++) {
    console.log(i * num);
    
} 

/*Exercício 2*/
const numeros = [7, 12, 24];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    console.log(numero);
    if(numero % 2  === 0){
        console.log(numero);       
    }
}

/*Exercício com números pares*/
const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);