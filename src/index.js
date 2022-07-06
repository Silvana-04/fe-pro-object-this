export const hotel = {
    quantityOfPlaces: 30,
    priceByPlace: 20,
    bankAccount: 0,
    guests: {},

    getLength: function(){
        return Object.keys(this.guests).length;
    },

    getActualFreePlace: function(){
        return (this.quantityOfPlaces - this.getLength());
    },
    
    paidPerPlace: function(){
        return this.bankAccount + this.priceByPlace;
    },

    checkInGuest: function(firstName, lastName, money){
          if (this.getActualFreePlace === 0){
            return 'Sorry, we have not free spaces';
          }
          if (money < this.priceByPlace){
            return 'Sorry, you have not enough money';
          }
        function Guest(firstName, lastName, money) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.money = money - this.priceByPlace;
          }
          return this.guests[this.getLength()] = new Guest(firstName, lastName, money);
          this.paidPerPlace();
    },

};


