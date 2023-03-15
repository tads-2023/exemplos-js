class PessoaController {
    constructor() {
        this.pessoas = [];
        this.container = document.querySelector("#container");
        document.querySelector("#adicionar").addEventListener('click', (e) => {
            e.preventDefault();
            this.adicionar();
        })
    }

    adicionar() {
        let nome = document.querySelector("#nome").value;
        let endereco = document.querySelector("#endereco").value;
        let pessoa = new Pessoa(nome, endereco, this.pessoas.length);
        this.pessoas.push(pessoa);
        this.renderizar()
    }

    renderizar() {
        this.container.innerHTML = "";
        this.pessoas.forEach( (pessoa, index) => {
            let view = new PessoaView(pessoa, index);
            this.container.innerHTML += view.template();
        });
        this.bind();
    }

    bind(){
        let acao = (button) => {
            button.addEventListener("click", (e) => {
                this.remover(e.target);
            });
        };

        document.querySelectorAll(".remover-pessoa").forEach(acao);
    }

    remover(target) {
        let index = target.closest("tr").dataset.index;
        this.pessoas.splice(index, 1);
        this.renderizar();
    }
}
