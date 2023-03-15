class PessoaView {
    constructor(pessoa, indice) {
        this.pessoa = pessoa;
        this.indice = indice; 
    }

    template() {
        return `
        <tr data-index="${this.indice}">
            <td>${this.pessoa.nome}</td>
            <td>${this.pessoa.endereco}</td>
            <td><button class="remover-pessoa">Remover</button></td>
        </tr>
        `
    }
}