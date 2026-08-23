// declaring object type
let Person : {
    name : string,
    age : number,
    isMarried : boolean
}
 Person = {
    name : "John",
    age : 30,
    isMarried : true
}

type Tea = {
    name : string,
    price : number,
    ingredients : string[]
}
const adrakChai : Tea = {
    name : "Adrak Chai",
    price : 20,
    ingredients : ["water", "milk", "sugar", "tea leaves", "ginger"]
}

type Cup = {size: string};
let smallCup : Cup = {size : "200ml"};
let bigCup = {size : "500ml", material : "steel"}
smallCup = bigCup; // this is allowed because smallCup is of type Cup and bigCup has all the properties of Cup. But if we try to assign bigCup to smallCup, it will give an error because bigCup has an extra property `material` which is not present in smallCup. This is called structural typing in typescript. In typescript, two objects are considered to be of the same type if they have the same shape.

type Item = {name : string, quantity : number};
type Address = {street : string, pin  : number};

type Order = {
    id : string;
    items : Item[];
    address : Address;
}