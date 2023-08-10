/* Ejercicio 4: shift()

Se dio de baja un alumno.

Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese primer estudiante. */

let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android",
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack",
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS",
  },
];

let alumnoDeBaja = estudiantes.shift();
