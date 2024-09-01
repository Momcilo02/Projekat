const { v4: uuidv4 } = require('uuid');

class Purchase{
    constructor(chocolates, factory, date, price, customer, status){
        this.id = uuidv4().slice(0,10)
        this.chocolates = chocolates;
        this.factory = factory;
        this.date = date;
        this.price = price;
        this.customer = customer;
        this.status = status;
    }
    changeStatus(newStatus){
        const statuses = ['Obrada', 'Odobreno', 'Odbijeno', 'Otkazana'];
        if(statuses.includes(newStatus)){
            this.status = newStatus;
        }
    }

}

module.exports = Purchase;