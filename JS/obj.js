let employees = {
    engineers : {
        emp1 : {
            id : 101,
            name : "Akki Singh",
            occupation : "Front End Engineer"
        },
        emp2 : {
            id : 102,
            name : "Rupesh Kumar",
            occupation : "Back End Engineer"
        },
        emp3 : {
            id : 103,
            name : "Akash Kumar",
            occupation : "Full Stack Engineer"
        },
        emp4 : {
            id : 104,
            name : "Ajay Kumar Jha",
            occupation : "Data Scientist"
        }
    },
    placement : {
        emp1 : {
            id : 1001,
            name : "Jaya Chauhan",
            occupation : "HR"
        },
        emp2 : {
            id : 1002,
            name : "Shekhar Gupta",
            occupation : "Talent Acquisition"
        },
        emp3 : {
            id : 1003,
            name : "Sandhya Kumari",
            occupation : "Interviewer"
        }
    },
    youtube : {
        emp1 : {
            id : 2001,
            name : "Mithun Kumar",
            occupation : "Video Editor"
        },
        emp2 : {
            id : 2002,
            name : "Manish Chauhan",
            occupation : "Video Editor"
        },
        emp3 : {
            id : 2003,
            name : "Rahul Kumar",
            occupation : "Cameraman"
        },
        emp4 : {
            id : 2004,
            name : "Rajat Kumar",
            occupation : "Script Writer"
        },
        emp5 : {
            id : 2001,
            name : "Vishal Sharma",
            occupation : "Senior Manager"
        } 
    }
}


// Run This Code also
// Object.entries();
// Object.keys();
// Object.values();

console.log(employees.engineers.emp1.name)
const result = Object.values(employees.youtube);
console.log(result)