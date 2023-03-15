class ParabensView {
    constructor(parabens) {
        this.parabens = parabens;
    }

    template() {
        return `
        <h1>Parabens para o ${this.parabens.nome}!</h1>
        ` 
    }
}