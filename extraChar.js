let str1 = "abcd";
let str2 = "abcde";

for(let char of str2){
    if(!str1.includes(char)){
        console.log(char);
        return;
    }
}