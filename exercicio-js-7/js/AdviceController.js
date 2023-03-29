class AdviceController {
    constructor() {
        this.content = document.querySelector("#content");

        document.querySelector("#botao").addEventListener('click', () => {
            this.fetchAdvice();
        })

        this.fetchAdvice();
    }

    fetchAdvice() {
        fetch("https://api.adviceslip.com/advice").then( (response) => {
            response.json().then( (json) => {
                let model = new Advice(json.slip.id, json.slip.advice)
                let view = new AdviceView(model);
                this.content.innerHTML = view.template();
            });
        }).catch( (error) => {
            console.log("Vish, deu ruim", error);
        })
    }
}