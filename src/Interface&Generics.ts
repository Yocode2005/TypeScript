// interface define the structure of object but do not genrate the javascript code

interface Chai {
    flavor : string
    price : number
    milk? : boolean
}

const masala : Chai = {
    flavor : "masala",
    price : 30
}

interface shop{
    readonly id : number
    name : string
}
const s : shop = {id : 1, name : "meena caffe"}

// function with interface

interface DiscountCalculator{ // interafce me functionality add nhi kr skte
    (price : number) : number
}
const apply50 : DiscountCalculator = (p) => p*0.5;

// define methods in interface
interface TeaMachine{
    start() : void;
    stop() : void
}
const machine : TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

interface chaiRating{ 
    [flavor : string] : number // index signature
}
const ratings : chaiRating = {
    masala : 4.5,
    ginger : 4.5,
}

// merging of interfaces
interface user{
    name : string
}
interface user{
    age : number
}
const u : user = {
    name : "Yogesh",
    age : 21
}

