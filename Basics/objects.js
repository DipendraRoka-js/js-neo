//singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name :"Dipendra",
    "gand" : "Deeep",
    [mySym] :"get",
    age :18,
    location:"Jaipur",
    email: "deeep@gmial.com",
    isLoggedin: true,
    lastlogin:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["gand"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "fsdfsfs@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "gerrer@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("this is me");
    
}
console.log(JsUser.greeting);

JsUser.himplease = function(){
    console.log(`Hello this is me,${this.name}`);
}

console.log(JsUser.himplease());
