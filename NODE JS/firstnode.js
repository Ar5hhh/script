
function print() {

    console.log("hello world")
}

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;


module.exports = {  //common JS 
    print,
    add,
    sub,
    mul,
    div
}


// export default {add , sub , mul , div }

