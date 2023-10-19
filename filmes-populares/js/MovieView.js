class MovieView {
    constructor(movie) {
        this.movie = movie;
    }

    template() {
        return `
        <div class="movie">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg" alt="Banner">
            <div class="score">
                <span>7.7</span>
            </div>
            <div class="description">
                <h2>Mission: Impossible - Dead Reckoning Part One</h2>
                <span>2023-07-08</span>
            </div>
        </div>
        `
    }
}