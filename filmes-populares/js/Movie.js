class Movie {
    constructor(titulo, lancamento, baner, avalicao) {
        this.titulo = titulo;
        this.lancamento = lancamento;
        this.baner = baner;
        this.avalicao = avalicao;
    }

    get banerUrl() {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.baner}`;
    }
}