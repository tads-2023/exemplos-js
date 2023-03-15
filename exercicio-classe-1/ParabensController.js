class ParabensController {
    constructor() {
        this.container = document.querySelector("#container");
        document.querySelector("button").addEventListener('click', (e) => {
            e.preventDefault();
            this.desejarParabens();
        })
    }

    desejarParabens() {
        let nome = document.querySelector("#nome").value;
        let parabens = new Parabens(nome);
        this.container.innerHTML = new ParabensView(parabens).template();

    }
}