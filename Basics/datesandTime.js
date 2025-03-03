//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreateDate = new Date(2023, 0 , 23,5,3)
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate);

let myCreateDate = new Date("01-14-2024")
let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);

console.log(`The month is: ${newDate.getMonth()} and the month is : ${newDate.getDay()}`);

newDate.toLocaleString('default',{
    weekday: "long",
})



