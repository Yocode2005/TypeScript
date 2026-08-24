const chaiFlavours : string[] = ["Masala", "Adrak"]
const chaiPrice : number[] = [10,20]

const rating : Array<number> = [4.5,5.0];

type chai = {
    name  : string;
    price : number;
}

const menu : chai[] = [
    {name : "Masala", price : 15},
    {name : "Adark", price : 25},
]

const  cities : readonly string[] = ["jaipur","delhi"]; 
// cities.push("pune")  // we do not update this array

const table : number[][] = [
    [1,2,3],
    [4,5,6]
]

let chaiTuple : [string,number];
chaiTuple = ["Masala",20]; // jis order me define kiya hai ussi order me chije aayngi
// chaiTuple = [20, "Masala"] // not possibul

let userInfo : [string,number,boolean?]
userInfo = ["hitesh",100]
userInfo = ["hitesh",100,true];

const location  : readonly [number,number] = [28.66,32.22];

const chaiItems : [name : string, price : number] = ["Masala",25];

