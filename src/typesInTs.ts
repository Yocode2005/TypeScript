let drink = "chai";
let cups = Math.floor(Math.random() * 10) + 1;

let channelName: string = "TeaTime";

// inferecing is when typescript automatically assigns a type to a variable based on the value assigned to it. For example, in the above code, the variable `drink` is inferred to be of type `string` because it is assigned a string value. Similarly, `cups` is inferred to be of type `number` because it is assigned a numeric value.


let chaiFlavor: string = "Masala";
chaiFlavor = "Ginger"; // this is valid because chaiFlavor is of type string and we are assigning a string value to it.

// typeAnotation is when we explicitly specify the type of a variable. For example, in the above code, we have explicitly specified that `chaiFlavor` is of type `string` using the syntax `let chaiFlavor: string = "Masala";`. This means that `chaiFlavor` can only hold string values and any attempt to assign a value of a different type will result in a compile-time error.