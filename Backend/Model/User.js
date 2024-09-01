const { v4: uuidv4 } = require('uuid');
const Cart = require('./Cart');

class User{
    constructor(username, password, name, lastname, gender, birthday, role, purchases, cart, factory, points, customerType, deleted)
    {
        this.username = username;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
        this.birthday = birthday;
        this.role = role;
        this.purchases = purchases;
        this.cart = cart;
        this.factory = factory;
        this.points = points;
        this.customerType = customerType;
        this.deleted = deleted;
    }
    changeRole(newRole){
        this.role = newRole;
    }
    addPurchase(newPurchase){
        if(this.role === 'Kupac'){
            this.purchases.push(newPurchase);
        }
    }
    addChocolate(newChocolate){
        if(this.role === 'Kupac'){
            if(!this.cart){
                this.cart = new Cart(this.username);
            }
            this.cart.addChocolate(newChocolate)
        }
    }
    addPoints(newPoins){
        if(this.role === 'Kupac'){
            this.points +=newPoins;
        }
    }
    assignFactory(newFactory){
        if(this.role === 'Menadzer'){
            this.factory = newFactory;
        }
    }
    changeCustomerType(newCustomerType){
        if(this.role === 'Kupac'){
            this.customerType = newCustomerType;
        }
    }
    
}

module.exports = User;