let char1 = 'a';
let char2 = 'm';

let str = "abcdefghijklmnopqrstuvwxyz"
let startIndex = str.indexOf(char1);
let endIndex = str.indexOf(char2);
let result = "";
for(let i=startIndex; i<=endIndex; i++){
    result = result + str[i] + " ";
}
console.log(result)