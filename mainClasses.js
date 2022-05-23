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

class LearningPath {
    constructor({ name = requiteParam("name"), courses = [] }) {
        this.name = name;
        this.courses = courses;
    }
}

class Student {
    #name;
    #courses;
    #learningPaths;
    constructor({
        name = requiteParam("name"),
        email = requiteParam("email"),
        age,
        twitter,
        facebook,
        instagram,
        linkedin,
        approvedCourses = [],
        learningPaths = []
    } = {}) {
        this.#name = name;
        this.email = email;
        this.age = age;
        this.approvedCourses = approvedCourses;
        this.socialMedia = {
            twitter,
            facebook,
            instagram,
            linkedin
        }
        this.#learningPaths = this.setterCall(learningPaths);
    }
    get learningPaths() {
        return this.#learningPaths;
    }
    set learningPaths(newLp) {
        if (newLp instanceof LearningPath) {
            this.#learningPaths.push(newLp);
        } else {
            console.log("Alguno de los LPs no es una instancia del prototipo LearningPath");
        }
    }

    setterCall(learningPaths) {
        this.#learningPaths = [];
        for (let i in learningPaths) {
            this.learningPaths = learningPaths[i];
        }
        return this.#learningPaths;
    }

    get() {
        return this.#name;
    }
    set(newName) {
        newName.length > 0 ?
            this.#name = newName
            : console.warn("El nombre no puede estar vacio");
    };

    get courses() {
        return this.#courses;
    }

    set courses(newCourses) {
        if (!this.#courses.includes(newCourses)) {
            this.#courses.push(newCourses)
        } else {
            console.warn("El curso ya ha sido agregado");
        }
    }
}
const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
    email: "juanito@example.com",
    name: "Juanito",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ]
});