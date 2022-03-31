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

function requiteParam(param) {
    throw new Error(param + " es obligatorio");
}

function createLearningPath({
    name = requiteParam("name"),
    courses = []
}) {
    const private = {
        "_name": name,
        "_courses": courses,
    }

    const public = {
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if (newName.length !== 0) {
                private["_name"] = newName;
            } else {
                console.warn("El nombre de la ruta debe tener almenos un carácter");
            }
        },
        get courses() {
            return private["_courses"];
        }
    }
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
        "_learningPaths": learningPaths,
    };
    const public = {
        email,
        age,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
            linkedin
        },
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if (newName.length !== 0) {
                private["_name"] = newName;
            } else {
                console.warn("Tu nombre debe tener almenos un carácter");
            }
        },
        get learningPaths() {
            return private["_learningPaths"];
        },
        set learningPaths(newLP) {
            if (!newLP.name) {
                console.warn("Tu LP no tiene la propiedad name");
                return;
            }

            if (!newLP.courses) {
                console.warn("Tu LP no tiene cursos");
                return;
            }
            if (!isArray(newLP.courses)) {
                console.warn("Tu LP no es una lista (*de cursos)");
                return;
            }
            private["_learningPaths"].push(newLP);

        },
    };
    return public;
}

const juan = createStudent({ name: "Juanito", email: "juanito@example.com" });