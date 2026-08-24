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