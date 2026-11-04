let product = {
    name : "Laptop",
    brand : "HP",
    price : 50000,
}


//Object to String
let p1 = product;
p1 = JSON.stringify(product)
console.log(typeof JSON.stringify(p1));
console.log(JSON.stringify(p1));

//String to Object
let newp1 = p1;
newp1 = JSON.parse(p1);
console.log(typeof JSON.parse(p1));
console.log( JSON.parse(p1));

//localStroage



