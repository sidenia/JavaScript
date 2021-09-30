//REDUCE: consumir todo o vetor e transformar em uma unica informação
//recebe como parametro outra função, esta que recebe o total e o proximo item

const arr = [1, 2, 3, 4, 5];

const soma = arr.reduce(function (total, next) {
    return total + next;
})

console.log(soma); 

// Primeira vez
//total = 0
//next = 1 (valor do array)

// Segunda vez
//total = 1
//next = 3 (valor do array)
//tt = 4

// and so on, até somar todo o vetor