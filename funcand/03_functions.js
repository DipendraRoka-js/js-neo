
const deep =[
    {
    id: 1 ,
    fname: 'dip',
    lname:'roka',
    isMale:true
    },

    {
    id: 2 ,
    fname: 'ip',
    lname:'rka',
    isMale:true
    },

    {
    id: 3 ,
    fname: 'dp',
    lname:'ro',
    isMale:true
    }


];

    

const isMail = deep.filter(function(todo) {
    return todo.isMale === true;
}).map(function(todo){
    return todo.fname;
});

console.log(isMail);