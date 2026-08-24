// class Chai{
//     flavour : string;
//     price : Number;

//     constructor(flavour : string, price : Number){
//         this.flavour = flavour
//         this.price = price
//     }
// }

// const masalaChai = new Chai("Ginger",20);
// masalaChai.flavour = "masala"

class Chai {
    public flavour : string = "Masala"

    private secretIngredient = "Cardamom"

    reveal(){ 
        return this.secretIngredient
    }

}

class Shop{
      protected shopeName =  "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopeName
    }
}

class Cup{
    readonly capacity : number = 250 // redonly mean ek bar assign kr skte eske bad change nhi kr skte 

    constructor(capacity : number){
        this.capacity = capacity
    }
}

class ModernChai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value>5) throw new Error("Too sweet");
        this._sugar = value
    }
}

const c = new ModernChai()
c.sugar = 3;

class EkChai{
    static shopName = "ChaiCode caffe"
    constructor(public flavour : string){}
}
console.log(EkChai.shopName);

abstract class Drink{
    abstract make() : void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing chai");
    }
}

 // conecpt of composition
 class Heater{
    heat(){}
 }

 class ChaiMaker{
    constructor(private heater : Heater){}
    make(){ // ab heater ke sare function function ko yha  pr access kr skte hai
        this.heater.heat
    }
 }