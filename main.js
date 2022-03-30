function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

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

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

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

// const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         facebook: undefined,
//         twitter: undefined,
//         instagram: undefined,
//         linkedin: undefined
//     },
// }

function requiteParam(param) {
    throw new Error(param + " es obligatorio");
}

function createStudent({
    name = requiteParam("name"),
    email = requiteParam("email"),
    age,
    twitter,
    facebook,
    instagram,
    linkedin,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
    };
    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        readName() {
            return private["_name"];
        },
        changeName(newName) {
            private["_name"] = newName;
        },
        socialMedia: {
            twitter,
            instagram,
            facebook,
            linkedin
        }
    }
    Object.defineProperties(public, {
        readName: {
            configurable: false,
            writable: false
        },
        changeName: {
            configurable: false,
            writable: false
        }
    })

    return public;
}


const juan = createStudent({ name: "Juanito", email: "juanito@example.com" });

Object.freeze(juan, "name");