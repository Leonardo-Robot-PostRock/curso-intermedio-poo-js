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
    throw new Error(param +  " es obligatorio");
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
    return {
        name,
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
            linkedin
        }
    }
}

const juan = createStudent({name: "Juanito", email: "juanito@example.com"})