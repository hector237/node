const argv = require("./config/yargs");
const { multiplicar, complete } = require("./helpers/multiplicacion");
const { listDir } = require("./helpers/FileSys");

console.clear;
console.log(argv);


if (argv.c) {
  complete()
    .then((nombreArchivo) => console.log(nombreArchivo, "Completado"))
    .catch((err) => console.log(err));
} else if (argv.i) {
  listDir(argv.i)
    .then(() => {
      console.log("Listado Terminado");
    })
    .catch((err) => {
      console.log(err);
    });
} else if (argv.b) {
  multiplicar(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo, "Completado"))
    .catch((err) => console.log(err));
} else {
  console.log("Escriba '--help' para recibir informacio");
}
