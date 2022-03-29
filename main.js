obj1 = {
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

const stringifiedComplexObj = JSON.stringify(obj1); // stringify;
const obj2 = JSON.parse(stringifiedComplexObj); // parse;

