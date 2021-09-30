// No ES6 é possível percorrer, filtrar, manipular vetores de formas pratica
//MAP: para percorrer o vetor e retonar alguma coisa de dentro
// recebe como parametro outra função, esta que recebe cada item dentro dela

const vetor = [1, 2, 3, 4, 5];

const novoVetor = vetor.map(function (item) {
    return item * 2;
});

console.log(novoVetor);

//outro parametro que pode ser usado dentro da função interna no map é o index

const arr = [1, 2, 3, 4, 5];

const newArr = vetor.map(function (item, index) {
    return item + index;
});

console.log(newArr);