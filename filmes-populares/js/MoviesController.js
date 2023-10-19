class MoviesController {
    constructor() {
        this.repository = new MovieRepository();
        this.content = document.querySelector("#content");
        this.init();
    }

    init() {
        this.content.innerHTML = "";
        let i = 0;
        while(i < 10) {
            let view = new MovieView({});
            this.content.innerHTML += view.template();
            i += 1;
        }
    }
}
