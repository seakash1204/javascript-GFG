// output =  {a:2, b:2, c:2, d:1, e:1, f:1}
const arr = ["a", "b", "c", "c", "d", "e", "b", "f", "a"];
const result = arr.reduce((acc, curr)=>{
    return curr in acc ? {...acc, [curr] : acc[curr] + 1} : {...acc, [curr] : 1}
},{})
console.log(result)
