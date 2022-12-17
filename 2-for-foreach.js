/*  --- Ciclo For y método forEach(): ---
Vamos a ver cómo lo haremos con el ciclo For:
Sintaxis básica:

  for ([expresion-inicial]; [condicion]; [expresion-final]){
      code...
  }

Sintaxis declarativa. Usando el método .forEach():

Metodo .forEach(), método que nos permite recorrer un arreglo. Este método recibe un funcione como callback una función, dicha función recibe por 3 parámetros opcionales, usaremos el que más nos interese:

  array.forEach((element, index, elements) => {
      //code..
}
*/

// Veamos un ejemplo: Tenemos un array de estudiantes:
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
// Vamos a recorrer el array usando sintaxis básica del for:
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
  // console.log(students[i].name);
  // console.log(students);
}
/*
Ahora vamos a recorrer ese mismos array usando la sintaxis declarativa del.forEach():
OJO el método forEach() no retorna nada, osea que si necesitamos trabajar con el array debemos en una variable incluir esos datos.Y por medio del método push() e incluir esos datos en ese array.
*/
const studentCourse = [];

students.forEach((student, index, students) => {
  console.log(student);
  // console.log(index);
  // console.log(students);
  // console.log(`name: ${student.name}`);
  // console.log(`course: ${student.course}`);
  // console.log(`${student.name} ${student.lastname} ${student.course}`);
  studentCourse.push(student.name + " " + student.course);
});

// console.log(studentCouse);
// Podemos comprobar si un método devuelve a no valor poniéndolo dentro de una variable así:
let result = students.forEach((student, index, students) => {
  return student.name;
});

console.log(result); // undefined