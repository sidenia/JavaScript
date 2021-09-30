// DESESTRUTURAÇÃO DE OBJETOS NO JS

const usuario = {
    'nome': 'Sidenia',
    'idade': 30,
    'endereco': {
        'cidade': 'Barueri',
        'uf': 'SP'
    },
}

//ao inves de fazer assim:
function mostraNome(usuario){
    console.log(usuario.nome, usuario.idade);
}
mostraNome(usuario);


//da para fazer assim:
function mostraName({ nome, idade }){
    console.log(nome, idade)
}

mostraName(usuario);