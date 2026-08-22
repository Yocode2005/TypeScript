 function getChai(kind:string | number){
    if(typeof kind === "string"){
        return `Making a cup of ${kind} chai`;
    }
    return  `Chai order : ${kind}`;
 }

 