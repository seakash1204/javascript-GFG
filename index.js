// let password = "Akki@1204";
// let flag = true;
// for(let i=0; i<password.length; i++){
//     if(password[i] === " "){
//         flag = false;
//         break;
//     }
// }
// if(flag){
//     console.log("Great.. Password created Successfully")
// }
// else{
//     console.log("Password cannot contain spaces..")
// }

let password = "Akki@ 1204";
const result = () => password.includes(" ") ? "Password cannot contain spaces.." : "Great.. Password created Successfully"
console.log(result())
