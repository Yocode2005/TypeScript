 function getChai(kind:string | number){
    if(typeof kind === "string"){
        return `Making a cup of ${kind} chai`;
    }
    return  `Chai order : ${kind}`;
 }

 // type narrowing is a process of refining the type of a variable within a conditional block. In the above code, we are using the `typeof` operator to check the type of the `kind` parameter. If it is a string, we return a message indicating that we are making a cup of chai. If it is a number, we return a message indicating the chai order. This is an example of type narrowing because we are refining the type of `kind` based on the condition.

 type chaiOrder = {
    type: string;
    sugar: number;
 }

function ischaiOrder(obj: any) : obj is chaiOrder{
    return(
        typeof obj === "object" &&
       obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:chaiOrder | string){
    if(ischaiOrder(item)){
        console.log(`Serving a cup of ${item.type} chai with ${item.sugar} sugar`);
    }
    return console.log(`Serving a cup of ${item} chai`);
}