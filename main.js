

function isArray(subject) {
    return Array.isArray(subject);
}

function SuperObject() { }
SuperObject.isObject = function (subject) {
    if (Array.isArray(subject)) {
        return Array.isArray(subject);
    }
    return typeof subject == "object";
}
SuperObject.deepCopy = function (subject) {
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