//FILTER: return precisa obrigatoriamente de um booleano (true ou false), e vai retornar
//o resultado do que foi buscado, se encontrar
//recebe como parametro outra função,  esta que recebe cada item dentro dela

const arr = [1, 2, 3, 4, 5];

const filtrar = arr.filter(function (item){
    //devolve só os pares, retorn true ou false
    return item % 2 === 0;
})

console.log(filtrar);