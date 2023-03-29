class AdviceView {
    constructor(advice) {
        this.advice = advice;
    }

    template() {
        return `
        <span class="advice-number">
            Advice #${this.advice.id}
        </span>
        <span class="advice">
            "${this.advice.texto}"
        </span>
        `
    }
}