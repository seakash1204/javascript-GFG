function calculateSum(number){
    if(number === 0){
        return 0;
    }
    return number + calculateSum(number - 1);
}
const result = calculateSum(10);
console.log(result)