class Tip {
    constructor(bill, tip, people) {
        this.bill = bill;
        this.tip = tip;
        this.people = people;
    }

    set tipValue(tip) {
        this.tip = tip;
    }
    set billValue(bill) {
        this.bill = bill;
    }
    set peopleValue(people) {
        this.people = people;
    }

    get tipAmount() {
        if(this.tip == 0) {
            return 0;
        }
        return this.bill * this.tip / 100 / this.people;
    }

    get total() {
        if(this.people == 0) {
            return 0;
        }
        let subTotal = this.bill * this.tip / 100;
        return (subTotal + this.bill) / this.people;
    }
}