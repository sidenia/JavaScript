// REST operator ...
//separa o rest das propriedades de uma outra parte
//e armazena ela em uma variavel que vc escolher o nome, no ex: resto

//PARA OBJETO
const usuario = {
    'nome': 'Sidenia',
    'idade': 30,
    'endereco': {
        'cidade': 'Barueri',
        'uf': 'SP'
    },
}

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);


// da pra aplicar em vetores
//PARA ARRAY
const arr = [1, 2, 3, 4, 5]

const [a, b, ...restante] = arr;
console.log(a)
console.log(b)
console.log(restante)



//PARA FUNÇÕES
//toda vez que precisar add um parametro, pra nao fazer assim: 
function soma(a, b, c) {
    return a + b + c;
}

console.log(soma(1,1,1)) // 3


//pode usar o REST assim com Reduce:
function somar(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somar(1,2,3)) // 6


//ou assim com o REST sozinho mesmo:

function somarvarios(a, b, ...params) {
    return params;
}

console.log(somarvarios(1,2,3,4,5)) // 3,4,5