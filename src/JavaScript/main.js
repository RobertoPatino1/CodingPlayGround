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

function salute(name) {
  console.log("Hello " + name + "!!!");
}
function saluteWithReturn(name) {
  return "Hello " + name + "!!!";
}

salute("Roberto");

let saluteVar = saluteWithReturn("Roberto");
console.log(saluteVar);

/*
Functions can be used the same way as variables
*/

/*
----------OBJECTS----------
- You can use the "this" keyword the same way as you use it in Java
- To access object properties declared as string you need to use this syntax: objectName['propertyName']
*/
const person = {
  firstName: "Roberto", //Para acceder a cualquiera de los campos solo colocamos person.nombreCampo
  lastName: "Patino",
  age: 21,
};

console.log(person.firstName.length);
console.log(person.firstName);
let number = "12312313";

number = parseFloat(number);

console.log(typeof number);

console.log(number);

//Arrays
let array1 = ["John", "Doe", "Jenna", "Doe", saluteWithReturn("Bob")]; //Functions can also be passed to arrays

console.log(array1);

let length = array1.length; //Remember: length is not a function but a property!!!

console.log("The length of the array1 is: " + length);

//Using the forEach function
console.log(array1.forEach(salute)); //By passing it a callback function it executes the function for each value of the array. You dont need to pass the elements as arguments

//Remember, you acces objects using named indexes, whereas arrays use number indexes to be accessed

//Watch out: By using delete on array element, the space of that element becomes undefined. To avoid this behaviour use the pop function

console.log(array1.toString());

/*
IF-ELSE Statements
*/

if (20 > 18) {
  console.log("Yes");
} else {
  console.log("No");
}

//looping with for-in

for (let key in person) {
  console.log(person[key]);
}

for (let value of array1) {
  console.log(value);
}

//Looping over a String
for (let char of "Hello world") {
  console.log(char);
}

/*
-----Arrow Functions-----
1. They let us write shorter function syntax
2. They are also known as fat arrow functions, cause of the "=>"
3. They can be declared as a variable
4. In order to transform a function into an arrow function, you need to remove the function keyword
because it is assumed. Then you need to asign it to a variable

The arrow separates the function parameters from the function body

Syntax:

let variableName = (param1,param2,...) => {     //Note: Parenthesis are optional when the function only has 1 parameter!!!
    block of code for the function
}

Parenthesis are mandatory when the function has no parameters

How do we call the function???
variableName(parameters)
*/

let sum = (a, b) => {
  return a + b;
};

let greet = () => "Hi!";

console.log(sum(2, 3));
console.log(greet());
document.addEventListener("click", () => console.log("Click"));

//Classes

class Person {
  //To declare a constructor we use the constructor keyword
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //Class methods DO NOT use the function keyword
  salute() {
    console.log("Hi, my name is: " + this.firstName);
  }
}

//To create an object we use the new keyword, like in Java
let person1 = new Person("Roberto", "Patino", 21);

person1.salute();

//JSON

//We can convert JSON text into a JS object using the JSON.parse function
let jsonText =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
let jsonObject = JSON.parse(jsonText);

console.log(jsonObject);

/*
Self invoking functions==> IIFE (Inmediately Invoked Function Expression)
These are functions that are executed inmediately after the are defined

Syntax:

(function() {
})();

The function is defined using this syntax, and the parenthesis at the end inmediately invoke the function!!!

They can also take parameters
(function(param1,param2) {

}
    
)(value1,value2);


If the function is to return something, then you need to store the function in a variable
*/

let getNumber = (function (n1) {
  let n = 10;
  return n+n1;
})(4)


console.log(getNumber);


/*
Callbacks!!!
- A callback is a function passed as an argument to another function
*/

//Example of a callback function that creates an array with only the positive numbers of the given array



//Declaring callback function


myArray = [1,6,-2,3,-21,-3,-1,123]





let resultArray = removeNegatives(myArray,(x) => x>=0);

console.log(resultArray);


function removeNegatives(array,callback){
    let returnArray = []
    for(number of array){
        if(callback(number)){
            returnArray.push(number);
        }
    }
    return returnArray;
}