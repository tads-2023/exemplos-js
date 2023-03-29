class Controller {
    constructor() {
        this.container = document.querySelector("#container-address");
        this.ip = "192.212.174.101";

        this.map = L.map('map').setView([-23.7531, -46.6695], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
        
        document.querySelector("button").addEventListener("click", (e) => {
            e.preventDefault();
            this.ip = document.querySelector("input").value;
            this.init();
        })


        this.init();
    }

    init() {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_E7wnuf5Cwn1rPvkpEKMxxefBC4if3&ipAddress=${this.ip}`;
        fetch(url).then( (response) => {
            response.json().then( (json) => {
                let model = new SearchIp(json.ip, json.location.city, 
                                         json.location.region, 
                                         json.location.timezone, json.isp, 
                                         json.location.lat, json.location.lng);
                let view = new SaidaDadosView(model).template();
                this.map.setView([json.location.lat, json.location.lng], 13)
                this.container.innerHTML = view;
            })
        }).catch( (error) => {
            console.log("Deu :shit:", error);
        })
    }
}