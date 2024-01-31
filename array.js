// let name = ["akash", "kumar", "singh"];
// let res = name.slice(1,2);
// console.log(res)
// console.log(name[0][8])

// let arr = new Array(0);
// console.log(arr)
// let arr2  = [1,2,3,4];
// let arr3 = [5,6,7];
// // console.log(arr2.pop())
// let arr4 = arr2.concat(arr3);
// console.log(arr4)

// const arr = [1,2,3,4,5];

// const result = arr.map(num => num + 1);
// console.log(result)


//Sum of numbers less than 40
const arr = [17,25,40,54,29,65,78,10,8];

const result = arr.reduce((acc, curr) => curr < 40 ? acc += curr : acc, 0) 
console.log(result)