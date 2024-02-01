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

// let password = "Akki@ 1204";
// const result = () => password.includes(" ") ? "Password cannot contain spaces.." : "Great.. Password created Successfully"
// console.log(result())


class Car{
    constructor(name){
        this.name = name;
    }
    drive(){
        console.log(this.name + ' average is good.')
    }
}

class Kia extends Car{
    drive(){
        console.log(this.name + ' speed is good.')
    }
}

class Benz extends Car{
    drive(){
        console.log(this.name + ' is fast.')
    }
}

let car = new Car('Car');
let kia = new Kia('Kia');
let benz = new Benz('Benz');
let cars = [car, kia, benz];
for(let i=0; i<cars.length; i++){
    cars[i].drive();
}
