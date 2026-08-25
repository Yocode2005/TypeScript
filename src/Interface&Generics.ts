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