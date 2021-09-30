// ###########################################################################
//Classes estáticas, aquelas que nao precisam ser instanciadas.
// quando voce declara um metodo estático ele nao enxerga o restante da classe
// ou seja, se voce tentar pegar objetos para dentro desse metodo com o this nao vai dar certo
// ele é independe do restante da classe, logo, quando uma classe tiver metodos estáticos
//geralmente ela nao tem constructor, serve mais para ajudar a fazer outras coisas
//Vide método OperacoesMatematicas para ver o funcionamento adequado de uma classe estatica.

//ex que nao funciona por causa do this
// class ListaDeTarefas {
//     constructor(){
//         this.tarefas = [];
//     }
//     static addTarefa () {
//         this.tarefas.push('nova tarefa')
//         console.log(this.tarefas)
//     }
// }
// // instanciar sem precisa do new
// ListaDeTarefas.addTarefa('Fazer 1')

// // exemplo correto

class OperacoesMatematicas {
    static soma (a, b){
        return a + b;
    }
}

soma = OperacoesMatematicas.soma(1,2)
console.log(soma)
