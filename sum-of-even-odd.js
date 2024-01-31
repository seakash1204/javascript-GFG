const numbers = [1,2,3,4,5,6,7,8];

const sumOfEven = numbers.reduce((acc, curr)=>{ 
    return curr % 2 === 0 ? {...acc, even : acc.even + curr} : {...acc, odd : acc.odd + curr}
}, {even : 0, odd : 0});
console.log(sumOfEven)