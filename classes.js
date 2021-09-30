//criação de classe 
class List{
    constructor() {
        this.dados = [];
    }

    add(dados){
        this.dados.push(dados);
        console.log(this.dados);
    }

}

//criação da classe com herança
//quando fizer o metodo construtor de uma classe que hera de outra
// é bom chamar o método construtor da classe pai através do super
class TodoList extends List{
   constructor(){
    super();

    this.usuario = "Sidenia";
   }

   mostraUsuario(){
       console.log(this.usuario);
   }
}

//instanciação da classe
const MinhaLista = new TodoList();

//associação a um id e a um evento
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo To do');
}

