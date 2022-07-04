export const hotel = {
    quantityOfPlaces: 30,
    priceByPlace: 20,
    guests: {},
  
    bankAccount: function(){
        const result = hotel.reduce((accum, curr) =>{
            return accum + curr.paidPerPlace;
        },0);  
    },

    getLength: function(){
        return Object.keys(this.guests).length;
    },

    getActualFreePlace: function(){
        return quantityOfPlaces - getLength();
    },
    
    paidPerPlace: function(){
        return this.bankAccount + this.priceByPlace;
    },

    checkInGuest: function(firstName, lastName, money){
        function Guest(firstName, lastName, money) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.money = money - this.priceByPlace;
          }

          if (this.quantityOfPlaces === 0){
            return 'Sorry, we have not free spaces';
          }
          if (money < this.priceByPlace){
            return 'Sorry, you have not enough money';
          }
      
          return this.guests[this.getLength()] = new Guest(firstName, lastName, money);
    },

};


