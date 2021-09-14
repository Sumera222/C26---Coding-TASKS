
let students = [
    {
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
]

students.forEach(function(students){
    console.log(`Hobbies Of ${students.name}`);

students.hobbies.forEach(function(hobbies , index){
    console.log(`${index+1}. ${hobbies}`)
    });
})