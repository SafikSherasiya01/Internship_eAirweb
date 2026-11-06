let number = [1,3,5,7,8,9,10,11];
console.log(number);
console.log(number[5]);
console.log(number[0]);
console.log(typeof number);

//checking the array is array or not
console.log(Array.isArray(number));

//checking the length
console.log(number.length);

//add element using push 
number.push(12);
console.log(number);

//delete element using pop 
console.log('popped ' + number.pop());
console.log(number);

//shift will delete and unshift will are same as push and pop it will do form starting
console.log(number.unshift(2));
console.log(number);

console.log(number.shift());
console.log(number);

//splice help to delete form the position you want to
number.splice(2,3);
console.log(number);

//toString will help to convert array into string
console.log(number.toString());

//sort will help to sort the array
let arr=[5,3,2,1,8,9]
arr.sort();
console.log(arr);

//valueOf is used to get array itself
// console.log(arr.valueOf());

//array use reference like object
let arr2 = arr;
arr2.push(10);
console.log(arr);

//de-structuring also work in array
let [a,b,c,d] = arr;
console.log(a + " " + b + " " + c + " ");