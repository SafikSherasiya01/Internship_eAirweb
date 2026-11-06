let num = 1; //initizaliation

while(num <= 10){ // condition
    console.log(num);
    num++; // updating
}
console.log('the final valule of num is : ' + num);

let num2 = 0; //initizaliation
while( num2 <= 2){ //condition
    console.log(Math.random()*2);
    num2++; //updating
}
console.log('the final valule of num2 is : ' + num2);

//do while loop
let x = 0; //initizaliation
do{
    console.log(x);
    x++; //updating
}while( x > 4){ //condition
    console.log(x);
}

//for loop

for(let z=1; z<= 10; z++){
    console.log(z);
}

let arr=[1,2,3,4,5,6,7,8,9,10,12,123,1,41,5,1];
for(i=0; i<arr.length; i++){
    console.log(i);
}

let number=[1,2,4,5,6];
sum=0;
for(i=0; i<number.length; i++){
    sum +=  number[i];
}
 console.log(`The Sum Of All Number Is: ${sum}`);

 let square = [];
 for(i=0; i<number.length; i++){
    square.push(number[i]*number[i]);
}
console.log(`The Sum Of All Number Is: ${square}`);


for(i=0; i<number.length; i++){
    if(number[i] === 5){
        console.log(`The number is found : ${number[i]}`);
        break;
    }
    console.log('still looking the number');
}

for(i=0; i<=30; i++){
    if(i %2==0){
        continue;
    }
    console.log(i);
}