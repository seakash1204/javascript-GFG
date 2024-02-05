// const str = "The quick brown fox jumps over the lazy dog";

// const lowerStr = str.toLowerCase();
// // console.log(lowerStr)

// function getStrWithoutVowels(str){
//     let vowelString = "";
//     for(let i=0; i<lowerStr.length; i++){
//         // if(lowerStr[i] !== 'a' && lowerStr[i] !=='e' && lowerStr[i] !== 'i' && lowerStr[i] !== 'o' && lowerStr[i] !== 'u'){
//         //     vowelString += lowerStr[i];
//         // }
//         if(lowerStr[i] === 'a' || lowerStr[i] ==='e' || lowerStr[i] === 'i' || lowerStr[i] === 'o' || lowerStr[i] === 'u'){
//             continue;
//         }else{
//             vowelString += lowerStr[i];
//         }

//     }
//     return vowelString;
// }
// console.log(getStrWithoutVowels(lowerStr))






const string = "The quick brown fox jumps 3 times over 7 the 5 lazy dogs";

function strWithoutVowelsAndNumbers(str){
    const vowelAndNumber = ["a", "e", "i", "o", "u", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let result = "";
    for(let char of str){
        if(!vowelAndNumber.includes(char)){
            result += char;
        }
    }
    return result;
}

const output = strWithoutVowelsAndNumbers(string);
console.log(output)
console.log("Length of the consonant : ", output.length)
console.log("Length without vowels and consonant : ", string.length - output.length)

