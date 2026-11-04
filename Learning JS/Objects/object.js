let product = {
    name : "Laptop",
    brand : "HP",
    price : 50000,
}
console.log('displaying full object');
console.log(product);

console.log('displaying specific property of object');
console.log(product.name);
console.log(product.brand);
console.log(product.price);

//different way to access the property of object
console.log('displaying specific property of object');
console.log(product['name']);
console.log(product['brand']);
console.log(product['price']);

//changing value in objects
console.log('changing value in objects');
product.brand = 'Asus';
console.log(product);

//Adding And Deleting items in object
console.log('Adding And Deleting items in object');
delete product.brand;
console.log(product);

//Inside Object and Function Passing inside object
console.log('Learning About Inside Object and Function Passing inside object');

let user = {
    name : 'safik',
    age : 21,
    address:  {
        state : 'Gujarat',
        city : 'wankaner',
    },
    displayAddress: function() {
        console.log(`The user Address is ${this.age}`);
    }
}
user.displayAddress();

//AutoBoxing
console.log('Learing About Autoboxing....'.toUpperCase());
console.log('Welcome To My Page'.length);
console.log('Welcome To My Page My Name Is SK'.replace('SK', 'Safik'));

//Object Reference
console.log('Object Reference')
let x = {num : 10,};
let y = x;
console.log(`x= ${x.num} y= ${y.num}`);
x.num = 12;
console.log(`x= ${x.num} y= ${y.num}`);

//== and === are not used for equality checking
console.log('== and === are not used for equality checking....');
let p = {pop:'asdf'};
let q = {pop:'asdf'};

console.log(`using == then also coming ${p==q}`);
console.log(`using === then also coming ${p===q}`);

//Destructuring and shortcut

console.log('Destructuring and shortcut');
let product1 = {
    name : "Laptop",
    brand : "HP",
    price : 50000,
}

//About shortcut
let name1 = product.name;
console.log(name1)

let { name } = product1;
console.log(name);

//property without shortcut
let price=150;
let product2 = {
    name : "Laptop",
    brand : "HP",
    price : price,
}
console.log(product2.price);


let product3 = {
    name : "Laptop",
    brand : "HP",
    price
}
console.log(product3.price);

//Function shortcut without shortcut
let user1 = {
    name : 'safik',
    age : 21,
    address:  {
        state : 'Gujarat',
        city : 'wankaner',
    },
    displayAddress: function() {
        console.log(`The user Address is ${this.age}`);
    }
}
user.displayAddress();

//Function shortcut
let user2 = {
    name : 'safik',
    age : 21,
    address:  {
        state : 'Gujarat',
        city : 'wankaner',
    },
    displayAddress() {
        console.log(`The user Address is ${this.age}`);
    }
}
user.displayAddress();