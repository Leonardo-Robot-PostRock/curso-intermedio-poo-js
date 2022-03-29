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

// function recursiva(){
//     if(/*validación*/){
//        // llamados recursivos
//     }else{

//     }
// }
const numeritos = [0, 1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 8, 8, 9, 9];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//     numerito = numeritos[index];
//     console.log({ index, numerito });
// }

function recursiva(numbersArray) {
    if (numbersArray.length !== 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);
        
        numbersArray.shift();
        recursiva(numbersArray);
    } else {

    }
}