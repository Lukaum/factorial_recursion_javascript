function factorial(num) {
    if (num === 1){
        return num;
    }
    else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(9));

//calculating a factorial with recursion
