class SearchIp {
    constructor(ip, city, region, timezone, isp, lat, lng) {
        this.ip = ip;
        this.city = city;
        this.region = region;
        this.timezone = timezone;
        this.isp = isp;
        this.lat = lat;
        this.lng = lng;
    }

    get location() {
        return `${this.city}, ${this.region}` 
    }
}