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

Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: true,
    configurable: true,
    enumerable: false
});
Object.defineProperty(juan, "editor", {
    value: "VSCode",
    configurable: true,
    writable: false,
    enumerable: true
});
Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,
})
Object.defineProperty(juan, "terminal", {
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptors(juan));