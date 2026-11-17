let sum = function(num1,num2){
    return num1 + num2;
}
console.log(sum(4,5));
console.log(sum(10,5));

let sum2 = sum;
console.log(sum2(10,5));

let ThreeNumberSum = function(num1,num2,num3,TwoNumberSum){
    let sum1 = TwoNumberSum(num1,num2);
    return TwoNumberSum(sum1 , num3);
}

console.log(ThreeNumberSum(4,5,5,sum));

console.log(ThreeNumberSum);
console.log(typeof ThreeNumberSum);

//Arrow Functions
let sum3 = (num1,num2) => {
    return num1 + num2;
}
console.log(sum3(2,3));

let sum4 = (num1,num2) => num1 + num2;
console.log(sum4(12,3));

let square = num => num*num;
console.log(square(5));

//Set TimeOut
let alarm = () => console.log(`Subha hogai utha jao ${new Date()}`);
// let timeID = setTimeout(alarm,1000);
// console.log(`Alarm set with timerID ${timeID}`);
// //Clear timer
// clearTimeout(timeID);
//Interval 
let intervalId = setInterval(alarm,1000);
setTimeout(()=> clearInterval(intervalId),5000);


