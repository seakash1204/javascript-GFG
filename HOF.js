// let arr = [1,2,3,4,5];
// function square(arr){
//     let newArr = [];
//     for(let number of arr){
//         newArr.push(number ** 2);
//     }
//     return newArr;
// }
// function cube(arr){
//     let newArr = [];
//     for(let number of arr){
//         newArr.push(number ** 3);
//     }
//     return newArr;
// }
// console.log(square(arr));
// console.log(cube(arr))

//let arr = [1,2,3,4,5];

// //first class function
// function square(number){
//     return number ** 2;
// }
// function cube(number){
//     return number ** 3;
// }

// //higher order function
// function HOF(wrapper, arr){
//     let resultedArray = [];
//     for(let numbers of arr){
//         resultedArray.push(wrapper(numbers))
//     }
//     return resultedArray;
// }

// console.log("Square of the numbers are : ", HOF(square, arr));
// console.log("Cube of the numbers are : ", HOF(cube, arr));

let arr = [1,2,3,4,5];
function HOF(arr, choice){
    let resultedArray = [];
    for(let number of arr){
        resultedArray.push(number ** choice);
    }
    return resultedArray;
}

console.log("Original Numbers are :- \n", arr)
console.log("Squares of the numbers are :- \n", HOF(arr, 2))
console.log("Cubes of the numbers are :- \n", HOF(arr, 3))
console.log("Fourth of the numbers are :- \n", HOF(arr, 4))
console.log("Fifth of the numbers are :- \n", HOF(arr, 5))
