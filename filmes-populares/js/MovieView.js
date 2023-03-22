class MovieView {
    constructor(movie) {
        this.movie = movie;
    }

    template() {
        return `
        <div class="movie">
            <img src="${this.movie.banerUrl}" alt="Banner">
            <div class="score">
                <span>${this.movie.avalicao}</span>
            </div>
            <div class="description">
                <h2>${this.movie.titulo}</h2>
                <span>${this.movie.lancamento}</span>
            </div>
        </div>
        `
    }
}