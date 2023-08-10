/* Ejercicio 3: push()
Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.

Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.

Los valores de cada uno son:

nombre: Juan

promedio: 5

curso: iOS

------------------

nombre: Miguel

promedio: 2

curso: Android */

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
estudiantes.push({
  nombre: "Juan",
  promedio: 5,
  curso: "iOS",
});

estudiantes.push({
  nombre: "Miguel",
  promedio: 2,
  curso: "Android",
});
