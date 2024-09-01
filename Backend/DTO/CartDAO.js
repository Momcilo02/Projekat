const {readJsonFile, writeJsonFile} = require('../Utils/jsonHandler');
const Cart = require('../Model/Cart');

class CartDAO{
    constructor(filePath){
        this.filePath = filePath;
    }

    async get(){
        try{
            const carts = await readJsonFile(this.filePath);
            return carts.map(data => new Cart(data));
        }catch (error){
            console.error('Greska pri ucitavanju korpe', error);
            throw error;
        }
    }
    async create(newCart){
        try{
            const carts = await readJsonFile(this.filePath);
            carts.push(newCart)
            await writeJsonFile(this.filePath, carts);
        }catch(error){
            console.error('Greska pri pravljenu korpe', error);
            throw error;
        }
    }
    async update(id, newData){
        try{
            let carts = await this.get();
            const i = carts.findIndex(c => c.id === id);
            if(i !== -1){
                carts[i] = {...carts[i], ...newData};
                await writeJsonFile(this.filePath, carts);
            }
            else{
                throw new Error('ne postoji korpa sa ovim id');
            }
        }catch(error){
            console.error('Greska pri izmeni korpe', error);
            throw error;
        }
    }
    async delete(id){
        try{
            let carts = await this.get();
            carts = carts.map(cart => {
                if(cart.id === id){
                    cart.deleted = true
                }
                return cart;
            });
            await writeJsonFile(this.filePath, carts);
        }catch(error){
            console.error('Greska pri brisanju', error);
            throw error;
        }
    }
}
module.exports = CartDAO;