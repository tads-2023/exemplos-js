class TipController {
    constructor() {
        this.app = document.querySelector("#app");
        this.tip = new Tip(0,0,0);
        this.app.innerHTML = new TipView(this.tip).template();
        this.bind();
    }

    bind() {
        document.querySelector("#calc").addEventListener('click', (e) => this.calcular(e));
        document.querySelector("#resetar").addEventListener('click', (e) => this.resetar(e));

        document.querySelectorAll(".tip-value").forEach( (button) => {
            let eventHandler = (e) => {
                console.log(this);
                e.preventDefault();
                this.selecionaTip(e);
            };

            button.addEventListener('click', eventHandler);
        })
    }

    selecionaTip(e) {
        this.tip.tipValue = parseInt(e.target.dataset.tip);
    }
    
    calcular(e) {
        e.preventDefault();
        this.tip.billValue = parseFloat(document.querySelector("#bill").value);
        this.tip.peopleValue = parseInt(document.querySelector("#people").value);
        this.app.innerHTML = new TipView(this.tip).template();
        this.bind();
    }

    resetar(e) {
        e.preventDefault();
        this.tip = new Tip(0,0,0);
        document.querySelector("form").reset();
    }
}