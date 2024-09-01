const { v4: uuidv4 } = require('uuid');

class Chocolate{
    constructor(name, price, kind, factory, type, weight, description, img, status, quantity){
        this.id = uuidv4();
        this.name = name;
        this.price = price;
        this.kind = kind;
        this.factory = factory;
        this.type = type;
        this.weight = weight;
        this.description = description;
        this.img =img;
        this.status = status;
        this.quantity = quantity;
    }
    changeStatus(statusNew){
        if (['Ima na stanju', 'Nema na stanju'].includes(statusNew)) {
            this.status = statusNew;
            console.log(`Nov status: ${this.status}`);
          } else {
            console.error('Los status');
          }
    }

}

module.exports = Chocolate