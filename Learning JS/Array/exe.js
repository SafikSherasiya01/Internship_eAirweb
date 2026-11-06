let arr = [5,6];
arr.unshift(4);
console.log(arr);
arr.push(7);
console.log(arr);

let arr2 = [0,1,2,3,4,5,6]
function getElement(arr2, position){
    return arr2[position-1];
}
console.log(getElement(arr2, 1));

//slice
console.log(arr.slice(1,5));

//while loop
let i=1;
while(i<5){
    console.log(i);
    i++;
}
console.log('greater then 5');

//modifiy above loop using break

function isPrime(num){
    for(i=2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

let num= 2;
let ii = 0;

while(true){
    if(isPrime(num)){
        console.log(num);
        ii++; 
        if(ii>=5){
            break;
        }
    }
    num++;
}

// console.log(isPrime(5));
// console.log(isPrime(1));
// console.log(isPrime(0));
// console.log(isPrime(21));
// console.log(isPrime(2));


for(i=10; i>0; i--){
    console.log(i);
}

for (i=0; i<10; i++){
    console.log(10 - i);
}

let arr1= [1,-6,5,7,-98];
for(i=0; i < arr1.length; i++){
    if(arr1[i] < 0){
        continue;
    }
    console.log(arr1[i])
}

let name1 = ['My','Name','Is','Safik','Sherasiya'];
// let result='';
// for(i=0; i<name1.length; i++){
//     result +=name1[i] + ' ';
// }
// console.log(result);
console.log(name1.join(" "));


let name = ['KG','Coding','Javascript','Cousre','is','Best'];
let [a,b,c,d,e,f] = name;
console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f + " ");