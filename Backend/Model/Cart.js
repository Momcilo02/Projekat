const {v4 :uuidv4} = require('uuid');

class Cart{
    constructor(user, price, chocolates, deleted){
        this.user = user;
        this.price = price;
        this.chocolates = chocolates;
        this.deleted = deleted
    }
    addChocolate(chocolate){
        this.chocolates.push(chocolate);
        this.price +=chocolate.price;
    }
    removeChocolate(chocolate){
        var index = this.chocolates.indexOf(chocolate);
        if(index !==-1){
            this.chocolates.splice(index, 1);
            this.price -=chocolate.price;
        }
    }
}

module.exports = Cart