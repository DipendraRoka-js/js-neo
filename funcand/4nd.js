// let x = 7;
// let y = 90;

// if(x< 4 || y > 85 ){
//     console.log("hello");
// }


// const color = x > 10 ? 'red':'blue';

// console.log(color);

function deep(fname, dname, lass){
    this.fname = fname;
    this.dname = dname;
    this.lass = lass;
}


deep.prototype.getfullname = function(){
    return `${this.fname} ${this.dname}`;
}

class person{
    constructor(fname, dname, lass){
    this.fname = fname;
    this.dname = dname;
    this.lass = lass;
    }

    getfullname(){
    return `${this.fname} ${this.dname}`;
    }
}

const dip1 = new deep('dip','roka','pass');
console.log(dip1.getfullname());