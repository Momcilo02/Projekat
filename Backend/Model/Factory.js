const { v4: uuidv4 } = require('uuid');

class Factory{
    constructor(name, chocolates, workHours, status, location, logo, rating){
        this.id = uuidv4();
        this.name= name;
        this.chocolates = chocolates;
        this.workHours = workHours;
        this.status = status;
        this.location = location;
        this.logo = logo;
        this.rating = rating;
    }

    changeStatus(statusNew){
        if (['Radi', 'Ne radi'].includes(statusNew)) {
            this.status = statusNew;
            console.log(`Nov status: ${this.status}`);
          } else {
            console.error('Los status');
          }
    }
    changeRationg(ratingNew){
        if (ratingNew >=0 && ratingNew <= 5){
            this.rating = ratingNew;
            console.log(`Nov rating: ${this.rating}`);
        }
        else{
            console.error('Los rating');
        }
    }

}
module.exports = Factory