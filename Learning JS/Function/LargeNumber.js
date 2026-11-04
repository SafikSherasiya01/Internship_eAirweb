function largeNumber(num1, num2) {
    if( num1>num2) {
        return `The Large Number Is First ${num1}`;
    }else {
        return `The Large Number Is Second ${num2}`;
    }
}
console.log(largeNumber(10,20));
console.log(largeNumber(100,20));
console.log(largeNumber(10,200));
console.log(largeNumber(1000,20));