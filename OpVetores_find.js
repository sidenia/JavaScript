//FIND: para verificar SE EXISTE alguma informação dentro do vetor
//recebe como parametro outra função, esta que recebe o item em questao.
//return precisa obrigatoriamente de um booleano (true ou false), e vai retornar
//o resultado do que foi buscado, se encontrar

const arr = [1, 2, 3, 4, 5];

const encontrar = arr.find(function (item) {
    return item === 4;
});

console.log(encontrar);
