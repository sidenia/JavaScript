// SPREAD operator ...  propaga, 
// repassa as infos de um objeto array para outra estrutura de dados.
//

//como unir? pode ser funções ou montar um 3 array
// nesse caso o spread ... pega cara elemento de cada array.

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2]
console.log(arr3)


//PARA OBJETO
//uma grande utilização do spread é quando voce quer
//criar um outro objeto com as mesmas propriedades do outro, trocando apenas 1 propriedade

const usuario1 = {
    nome: 'Sidenia',
    idade: 30,
    empresa: 'itau',
};

const usuario2 = {...usuario1, nome: 'Gabriel'};

console.log(usuario1);
console.log(usuario2);