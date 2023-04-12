class LinkController {
    constructor() {
        this.container = document.querySelector("#container");
        document.querySelector("#action").addEventListener('click', (e) => {
            e.preventDefault();
            this.shorten();
        })
    }

    shorten() {
        let link = document.querySelector("#link").value;
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
          .then( (result) => {
            return result.json();
          })
          .then( (data) => {
            console.log(data);
            let shortedLink = data.result.full_short_link2;
            let model = new Link(link, shortedLink);
            let view = new LinkView(model).template();
            this.container.innerHTML += view;
          })
          .catch( (error) => {
            console.log("Opsss, deu ruim", error);
          });
        //
    }
}