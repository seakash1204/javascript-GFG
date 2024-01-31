let emp = [
    {
        empName : "Akash",
        yearOfExp : 0
    },
    {
        empName : "Vikash",
        yearOfExp : 1
    },
    {
        empName : "Amit",
        yearOfExp : 5
    },
    {
        empName : "Akki",
        yearOfExp : 4 
    },
    {
        empName : "Vijay",
        yearOfExp : 3
    }
]

const result = emp.filter(employee => employee.yearOfExp > 3).map(empDetails=>empDetails.empName)
console.log(result)