/* 7--- Método find(): ---

El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

Sintaxis:
arr.find(callback(element[, index[, array]])[, thisArg])

Este método devuelve solo el primer elemento que cumple con la función. Es así porque es una búsqueda. No un filtro ya que para eso existe el método filter().
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
// Vamos a buscar un objeto en el arreglo:
findStuden = students.find((student) => {
    if (student.age === 20) {
        return 1;
    }
})

console.log(findStuden);