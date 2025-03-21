// const deep = {
// name :"fsffsd"
// }

// const {name}= deep

function myName(){
    console.log("D");
    console.log("i");
    console.log("p");
    console.log("e");
    console.log("n");
}
// myName()

// function addTwo(numm1, num2){
//     console.log(numm1+ num2); 
// }

function addTwo(numm1, num2){
    let result = numm1 + num2
    return result 
}
// const results = addTwo(3,4)
// console.log("Result:",results);
function logiNN(username){
    if (username === undefined){
    console.log("Please enter a username");
     return
    }
    return `${username} just logged in`
}

console.log(logiNN("deep"))