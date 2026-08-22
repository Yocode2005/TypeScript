let subscriberCount: number | string = 1000; // union type
subscriberCount = "1k"; // valid because subscriberCount can be a string or a number

let apiRequestStatus: "pending" | "success" | "error" = "pending"; // union type with string literals

let airlineSeat: "window" | "aisle" | "middle" = "window"; // union type with string literals

const orders = [100, 200, 300, 400, 500];
let  crntOrder; // at that point of time  type of value is unknown/any. So, we can assign any type of value to it. But once we assign a value to it, the type of value will be fixed and we cannot assign a value of different type to it.
for(let item of orders){
    if(item === 300){
        crntOrder = item;
        break;
    }
}
console.log(crntOrder); // 300 amd that point of time type of crntOrder is number. So, we cannot assign a value of different type to it. For example, if we try to assign a string value to it, we will get an error.