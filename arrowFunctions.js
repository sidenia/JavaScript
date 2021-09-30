//ARROW FUNCTIONS: vale a pena ser usada em um ambiente de função anônima
//para todos os exemplos de uso de arrow functions abaixo, o resultado sera o mesmo
//porem com o codigo refatorado

//o js usa muito callback, passagem de função para dentro de uma outra função
//declaraçao normal
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(function (item) {
    return item * 2;
});


//substituir o function que é uma função anonima pela sintaxe do arrow function
const newArr = arr.map((item) => {
    return item * 2;
});


//se a função receber apenas 1 parametro, podemos remover o parenteses em volta do item
const newArr = arr.map(item => {
    return item * 2;
});


//se a função tem apenas uma funcionalidade, da para tirar o return de dentro e colocar
//depois da seta como se fosse uma lambda - reduzindo a verbozidade
const newArr = arr.map(item => item * 2);

console.log(newArr);


////////////////////////////////////////////////////////////////////////////////////////////////

//outra feature do arrow function é criar funções utilizando constantes
//PORÉM NÃO É RECOMENDADO
//ao invés de fazer:

function teste () {
    return 'teste'
}

// podemos fazer

const teste2 = () => {
    return 'teste2'
}

console.log(teste());
console.log(teste2());

//outros exemplos, se quiser retornar diretamente um objeto da função
// array de numeros, string 

const teste3 = () => [8,9,10];
const teste4 = () => 'teste4';
console.log(teste3());
console.log(teste4());


//mas essa logica NÃO FUNCIONARÁ PARA, pois a chave também é utilizada 
// no corpo da função
//const teste5 = () => {'nome': 'teste5'};

//para funcionar tem duas alterantivas ou faz normal:
const teste5 = () => {
    return {'nome': 'teste5'}
};
console.log(teste5());

//ou envolve o retorno em parenteses se quiser devolver em só 1 linha
const teste5 = () => ({'nome': 'teste5'});