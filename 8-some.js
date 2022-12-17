/* 8--- Método some(): ---

El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
Sintaxis:
arr.some(callback(element[, index[, array]])[, thisArg])

Este método buscará en el array y retornara true o false si con la condición ese elemento o objeto existe.
Solo retorna un valor booleano si se cumple o no la condición.
*/

const students = [
    {
        name: "Jill",
        lastname: "Doe",
        age: 23,
        course: "Marketing",
    },
    {
        name: "John",
        lastname: "Doe",
        age: 20,
        course: "Web Development",
    },
    {
        name: "Jack",
        lastname: "Doe",
        age: 22,
        course: "Accounting",
    },
    {
        name: "Ryan",
        lastname: "Ray",
        age: 20,
        course: "Web Development",
    },
    {
        name: "Jane",
        lastname: "Doe",
        age: 21,
        course: "Financial Management",
    },
];

// Apliquemos el método:
const studentsSome = students.some((student) => {
    if (student.age < 24) {
        return true;
    }
})

console.log(studentsSome);

// Podemos usar los condicionales que queramos. Aunque no es necesario usar siempre el condicional if, veamos.
const studentSome = students.some((student) => {
    return student.lastname === 'Perez';
});

console.log(studentSome);
