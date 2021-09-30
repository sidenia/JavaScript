// DESESTRUTURAÇÃO DE OBJETOS NO JS

const usuario = {
    'nome': 'Sidenia',
    'idade': 30,
    'endereco': {
        'cidade': 'Barueri',
        'uf': 'SP'
    },
}
//console.log(usuario);
//com desestruturacao

const { nome, idade, endereco:{cidade} } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);


// //pegando objetos SEM desestruturacao
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
