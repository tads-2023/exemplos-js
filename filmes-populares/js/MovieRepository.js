class MovieRepository {
    async populares() {
        return new Promise( (resolve, reject) => {
            let promessa = fetch("https://api.themoviedb.org/3/movie/popular?api_key=221381933449d5d15f7d0b6a6b1f87a1");
            promessa.then( (resposta) => {
                resposta.json().then((dados) => {
                    let movies = dados.results.map( (json) => {
                        return new Movie(json.title, json.release_date, json.poster_path, json.vote_average);
                    });
                    resolve(movies);
                })
            }).catch( (err) => {
                console.log("Deu ruim!!");
                reject("Não foi possível carregar os filmes!");
            });
        })
    }
}