console.log("new file");

let age=21;
const addnum= function(a,b){
    return a+b;
}

module.exports={//by expoting we can use them in another file also 
    age,
    addnum
}