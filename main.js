const juan = {
    name: "Juan",
    age: 25,
    approvedCourses: ["Curso1"],

    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// console.log( Object.keys(juan));
// console.log( Object.getOwnPropertyNames(juan));
// console.log( Object.entries(juan));

Object.seal(juan);
Object.freeze(juan)

console.log(Object.getOwnPropertyDescriptors(juan));