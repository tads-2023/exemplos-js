const TODOS_KEY = "todos"
const TODOS_INDEX_KEY = "todos_indice"

class toDoRepository {
    constructor() {
        let todosIndex = localStorage.getItem(TODOS_INDEX_KEY)
        let todos = this.deserializar(localStorage.getItem(TODOS_KEY));
        if(!todosIndex) {
            localStorage.setItem(TODOS_INDEX_KEY, '0');
        }
        if(!todos) {
            localStorage.setItem(TODOS_KEY, this.serializar([]));
        }
    }

    adicionar(todo) {
        let todos = this.deserializar(localStorage.getItem(TODOS_KEY));
        let todosIndex = parseInt(localStorage.getItem(TODOS_INDEX_KEY));
        todo.indice = todosIndex;
        todos.push(todo);
        localStorage.setItem(TODOS_KEY, this.serializar(todos));
        localStorage.setItem(TODOS_INDEX_KEY, this.serializar(todosIndex+1))
    }

    remover(indice) {
        let todos = this.deserializar(localStorage.getItem(TODOS_KEY));
        let aRemover = todos.filter( (e) => {
            e.index == indice;
        });
        let indeceARemover = todos.indexOf(aRemover);
        todos.splice(indeceARemover, 1);
        localStorage.setItem(TODOS_KEY, this.serializar(todos));
    }

    listar() {
        return this.deserializar(localStorage.getItem(TODOS_KEY));
    }

    deserializar(string) {
        return JSON.parse(string);
    }

    serializar(objeto) {
        return JSON.stringify(objeto);
    }
}