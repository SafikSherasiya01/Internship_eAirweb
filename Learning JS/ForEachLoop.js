//Using For loops
let arr = [1,2,3,4,5,6,7,8,9];
for(i = 0; i < arr.length; i++){
     console.log(arr[i]);
}

//Using forEach loops it is easy to use but we cannot use it in early exit and also cannot use in return
let Fruit = ['Mango','Banana','Apple','Orange'];
Fruit.forEach(num => console.log(num));

//not using filter
let odd = arr.filter((num,index) =>{
    if(num % 2 === 1){
    return true;
}else{
    return false;
}
})
console.log(odd);
    

//Filter
let odds = arr.filter((num,index) => num % 2 === 1);
console.log(odds);

//Map
let nums = [2,3,5]
let square1 = nums.map(num => num*num);
console.log(square1);