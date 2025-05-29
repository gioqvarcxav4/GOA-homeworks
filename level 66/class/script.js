function flight(FlightID, FlightStatus){
    this.FlightID = FlightID;
    this.FlightStatus = FlightStatus;
}

let flight1 = new flight("NGT 929", "landed");
console.log(`Flight ${flight1.FlightID} has ${flight1.FlightStatus}`);


function discPrice(ID, price, discount){
    this.ID = ID;
    this.price = price;
    this.discount = discount;
    
    this.discountedPrice = function(){
        let newPrice = this.price - (this.discount / 100) * this.price;
        console.log(`${this.ID} price: ${this.price}`);
        console.log(`${this.ID} new price: ${newPrice}`)
    }
}

let product = new discPrice("LD1493",1400, 20 );
product.discountedPrice();