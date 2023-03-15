class toDoController{
    constructor(){
        this.container = document.querySelector("#container")
        this.toDos = [];
        this.renderizar();
        this.botao = document.querySelector("#salvar");
        this.botao.addEventListener("click", (e) => {
            e.preventDefault();
            this.adicionar();
        });
    }

    bind(){
        document.querySelectorAll(".remover-todo").forEach( (botao) => {
            botao.addEventListener('click', (e) => {
                this.remover(e.target);
            })
        });
        document.querySelectorAll(".fazer-todo").forEach( (botao) => {
            botao.addEventListener('click', (e) => {
                this.fazerTodo(e.target);
            })
        });
    }

    remover(button) {
        let indice = button.closest("div").dataset.indice;
        button.closest("div").remove();
        this.toDos.splice(indice,1);
    }

    fazerTodo(button) {
        let indice = button.closest("div").dataset.indice;
        this.toDos[indice].fazer = !this.toDos[indice].done;
        this.renderizar();
    }

    adicionar() {
        let conteudo = document.querySelector("#title").value;
        this.toDos.push(new toDo(conteudo,false));
        this.renderizar();
    }

    renderizar() {
        this.container.innerHTML = '';
        this.toDos.forEach((toDo, indice) => {
            this.container.innerHTML += new toDoView(toDo, indice).template();
        });
        this.bind();
    }
}   
