let a = 3;
function first(){
    console.log({a})
    let b = 7;
    function second(){
        console.log({b});
        let c = 10;
        function third(){
            console.log({c})
        }
        third()
    }
    second()
}
first()

// let a = 5;
// function first(){
//     console.log({a});
//     let b = 50;
//     return function second(){
//         console.log({b});
//     }
// }
// const result = first()
// result();