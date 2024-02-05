let family = [
    {
        name : "Amarjeet Singh",
        age : 58
    },
    {
        name : "Gyanti Devi",
        age : 51
    },
    {
        name : "Akash Kumar",
        age : 28
    },
    {
        name : "Rani Patel",
        age : 22 
    },
    {
        name : "Komal Singh",
        age : 18
    }
]

// const result = family.map(fam=>fam.age).reduce((acc, curr) => acc + curr, 0);
const result = family.reduce((acc, curr) => acc + curr.age, 0)
console.log(result/family.length)