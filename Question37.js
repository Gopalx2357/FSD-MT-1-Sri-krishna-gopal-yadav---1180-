let employees = [
    { name: "gopal", department:"HR",salary:30000},
    { name: "aman", department:"IT",salary:50000},
    { name: "rahul", department:"IT",salary:40000},
    { name: "himanshu", department:"HR",salary:40000}
];
employees.sort((a,b)=>{
    if (a.department <b.department)
        return -1;
    if (a.department >b.department)
        return 1;
    return a.salary -b.salary;
});
console.log(employees);