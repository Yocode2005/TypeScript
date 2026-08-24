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