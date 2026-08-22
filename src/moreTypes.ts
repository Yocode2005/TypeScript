let response : any = "42";
let numericalLength: number = (response as string).length; // this is called force full type assertion. We are telling typescript that we know the type of the variable `response` is string and we are asserting it to be of type string. This is useful when we are sure about the type of a variable but typescript is not able to infer it correctly.

type Book = {
    name: string;
};

let bookString = '{"name": "who moved my cheese"}';

let bookObject = JSON.parse(bookString) as Book; // if we do not use as Book, typescript will infer the type of bookObject to be any and we will not get any type checking. By using as Book, we are telling typescript that we know the type of the variable `bookObject` is Book and we are asserting it to be of type Book. This is useful when we are sure about the type of a variable but typescript is not able to infer it correctly.

console.log(bookObject.name);