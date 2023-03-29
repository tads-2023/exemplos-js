class SaidaDadosView {
    constructor(dados) {
        this.dados = dados;
    }

    template() {
        return `
        <div class="address-info">
            <span class="title">IP ADDRESS</span>
            <span class="description">${this.dados.ip}</span>
        </div>
        <div class="address-info">
            <span class="title">LOCATION</span>
            <span class="description">${this.dados.location}</span>
        </div>
        <div class="address-info">
            <span class="title">TIMEZONE</span>
            <span class="description">${this.dados.timezone}</span>
        </div>
        <div class="address-info">
            <span class="title">ISP</span>
            <span class="description">${this.dados.isp}</span>
        </div>
        `
    }

}