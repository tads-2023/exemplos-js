class MoviesController {
    constructor() {
        this.repository = new MovieRepository();
        this.content = document.querySelector("#content");
        this.init();
    }

    init() {
        this.repository.populares().then( (movies) => {
            this.content.innerHTML = "";
            movies.forEach( (movie) => {
                let view = new MovieView(movie);
                this.content.innerHTML += view.template();
            })
        }).catch((msg) => {
            alert(msg)
        });
    }
}
