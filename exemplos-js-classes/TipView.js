class TipView {
    constructor(tip) {
        this.tip = tip;
    }

    template() {
        return `
            <div>
                <span>Tip Amount</span>
                <strong>$ ${this.tip.tipAmount.toFixed(2)}</strong>
            </div>
            <div>
                <span>Total</span>
                <strong>$ ${this.tip.total.toFixed(2)}</strong>
            </div>

            <div>
                <button id="calc">Calcular</button>
                <button id="resetar">Resetar</button>
            </div>
        `
    }
}