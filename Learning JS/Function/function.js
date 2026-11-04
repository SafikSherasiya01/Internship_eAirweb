let age = 20;
function finalage() {
    console.log(`your age is ${age}`);
}
finalage();

age = 30;
finalage();

age = 40;
finalage();

//Return Statement
let driveAge = 20;
function driveStutusCheck() {
    if (driveAge === undefined) {
        return 'App Avtar Ho';
    }

    console.log('Checkinng the drive status using return statement...');

    if(driveAge < 18) {
        return 'You a bicycle ';
    }else{
        return 'You can drive a car';
    }
}

    console.log(driveStutusCheck());

//Parameter and Argument
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));
console.log(sum(20, 40));
console.log(sum(10, -10));
console.log(sum(10, 20.22));

//Default Parameter
function geeting(name = 'Guest') {
    console.log(`Welcome ${name}`);
}
geeting('Safik');
geeting();