// let a,b;
// a = 12;
// b = 3;


// const PI = 3.14;    //Constant values cannot be changed!!!
// let result = a*b;   //This is not a constant, so it can be changed
// console.log(result)
// console.log(PI)


/*
Data types
String, number, bigint, boolean, undefined, null, symbol, object (object,array,date)
*/
// console.log(typeof PI)



// document.getElementById("mainTittle").innerHTML = "Hello Dolly.";
// console.log("Hi")




/*
Functions!!!!
*/

function salute(name){
    console.log("Hello "+name+"!!!")
}
function saluteWithReturn(name){
    return "Hello "+name+"!!!";
}

salute("Roberto")

let saluteVar = saluteWithReturn("Roberto")
console.log(saluteVar)



/*
Functions can be used the same way as variables
*/


/*
----------OBJECTS----------
- You can use the "this" keyword the same way as you use it in Java
- To access object properties declared as string you need to use this syntax: objectName['propertyName']
*/
const person = {
    firstName: "Roberto",       //Para acceder a cualquiera de los campos solo colocamos person.nombreCampo
    lastName :"Patino",
    age:21
}


console.log(person)