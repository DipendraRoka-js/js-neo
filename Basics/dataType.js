//primitive 
//7 types:String, Number,Boolean,null,undefined,Symbol,BigInt

const deep = 32343434324344343n

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const go = null;

//Reference (Non primitive)
//Array,Objects,Functions

const friend =["for","gope","dog"]

let obbj = {
    name:"gope",
    age:45,
}

const myFunction =function(){
    console.log("Hello world");
}

console.log(typeof go);
