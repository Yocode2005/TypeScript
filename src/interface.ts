type ChaiOrder = {
    type : string,
    sugar : number,
    strong : boolean
};

function makeChai(order : ChaiOrder){
    console.log(order);
}

function serveChai(order : ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water : number,
    milk : number,
}
class MasalaChai implements TeaRecipe{
    water = 100; 
    milk = 50;
}

// it do not applicable for custamize type,  A class can only implement an object type or intersection of object types with statically known members
// to solve this we need to define interface 
// type CupSize = 'small' | 'large'
interface CupSize{
    size : "small" | "large"
}
class chai implements CupSize{
    size : "small" | "large" = "small";
}