const nome = 'Si'
const array = ['Meu ', 'nome ',  'é']

//MAP
const usandoMap = array.map(function (item) {
    return item
});
console.log(usandoMap)


//REDUCE
const usandoReduce = array.reduce(function (soma, item){
    return soma + item
})

console.log(`${usandoReduce} ${nome}`)


//FIND
const usandoFind = array.find(function (item){
    return item === 'Meu '
});
console.log(usandoFind)

//FIND exemplo com array de objeto
const meuObj = [{
    nome: 'Sidenia',
    sobrenome: 'Bezerra',
},]

const usandoFind2 = meuObj.map(function (item){
    return item.nome
});

console.log(usandoFind2)


//FILTER - exemplo 1 em array
const usandoFilter = array.filter(function (item){
    return item === 'é'
});
console.log(usandoFilter);

//FILTER - exemplo 2 em array com objeto

const usandoFilter2 = meuObj.filter(function (item){
    return item.sobrenome === 'Bezerra';
});
console.log(usandoFilter2);
