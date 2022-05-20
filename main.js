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

function LearningPath({
    name = requiteParam("name"),
    courses = []
}) {
    this.name = name;
    this.courses = courses;

    // const private = {
    //     "_name": name,
    //     "_courses": courses,
    // }

    // const public = {
    //     get name() {
    //         return private["_name"];
    //     },
    //     set name(newName) {
    //         if (newName.length !== 0) {
    //             private["_name"] = newName;
    //         } else {
    //             console.warn("El nombre de la ruta debe tener almenos un carácter");
    //         }
    //     },
    //     get courses() {
    //         return private["_courses"];
    //     }
    // }
}

function Student({
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
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        facebook,
        instagram,
        linkedin
    };

    const private = {
        "_learningPaths": [],
    }

    Object.defineProperty(this, "learningPaths", {
        get() {
            return private["_learningPaths"];
        },
        set(newLp) {
            if (newLp instanceof LearningPath) {
                private["_learningPaths"].push(newLp);
            } else {
                console.log("Alguno de los LPs no es una instancia del prototipo LearningPath");
            }
        }

    })
    for (learningPathIndex in learningPaths) {
        this.learningPaths = learningPaths[learningPathIndex]
    }

    //     const private = {
    //         "_name": name,
    //         "_learningPaths": learningPaths,
    //     };
    //     const public = {
    //         email,
    //         age,
    //         approvedCourses,
    //         socialMedia: {
    //             twitter,
    //             instagram,
    //             facebook,
    //             linkedin
    //         },
    //         get name() {
    //             return private["_name"];
    //         },
    //         set name(newName) {
    //             if (newName.length !== 0) {
    //                 private["_name"] = newName;
    //             } else {
    //                 console.warn("Tu nombre debe tener almenos un carácter");
    //             }
    //         },
    //         get learningPaths() {
    //             return private["_learningPaths"];
    //         },
    //         set learningPaths(newLP) {
    //             if (!newLP.name) {
    //                 console.warn("Tu LP no tiene la propiedad name");
    //                 return;
    //             }

    //             if (!newLP.courses) {
    //                 console.warn("Tu LP no tiene cursos");
    //                 return;
    //             }
    //             if (!isArray(newLP.courses)) {
    //                 console.warn("Tu LP no es una lista (*de cursos)");
    //                 return;
    //             }
    //             private["_learningPaths"].push(newLP);

    //         },
    //     };
    //     return public;
}
const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
    email: "juanito@example.com",
    name: "Juanito",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});