

//Cannot be a reserved keyword let, if, else, var and so on.
//Should be meaningful
//Cannot start with a number(1name)
//Cannot contain a space of hyphen(-)
//Are case-senstivie



//if you dont need to reassign a varible use const.


//primitive types
//string, number, boolean, undefined, null

//reference types
// object, array, functions

let person = {
    name: 'Mike',
    age: 30
};//object literal, curly bracers. inside the curly bracers give properties. for this example we want 2.

//dot notation
person.name = 'Doctor';

//bracket notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);


let isApproved = false; //boolean literal. can be true or false. reserved keywords that cant be variable names
let firstName = undefined;
let selectedColor = null; //clear the value of a variable. null is also considered an object.


//languages
//static (statically-typed)
//string name = 'john';

//dyanmic (dynamically-typed)

let selectedColors = ['red', 'blue']; //square brackets indicate array literal
selectedColors[2] = 1;
console.log(selectedColors.length);


// performing a task
// functions are a set of statements that perform a task or calculate a value
function greet(name, lastName) {  //name and lastName has been added as parameteres. its only useful within this function.
    console.log(' Hello ' + name + ' ' + lastName); //body of this function. all the statements to define our logic. Our functions can have inputs.
}

//calaculintg a vlue
function square(number) {
    return number * number;
}

 //call the function //john is an argument of the greet function// arguement will supply the parameter.
console.log(square(2));