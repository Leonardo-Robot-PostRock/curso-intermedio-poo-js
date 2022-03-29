<<<<<<< HEAD
function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

=======
const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA() {
        this.a = "AAAAA";
    }
}

function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

>>>>>>> 072ab20aa29365613260e728e4c18b0ee06ce5bc
function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }
<<<<<<< HEAD

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

=======

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

>>>>>>> 072ab20aa29365613260e728e4c18b0ee06ce5bc
        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}

<<<<<<< HEAD
const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined
    },
}

const juan = deepCopy(studentBase);
Object.seal(juan);
Object.isSealed(juan)
=======
>>>>>>> 072ab20aa29365613260e728e4c18b0ee06ce5bc
