const { option, boolean } = require("yargs");

const { argv } = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    description:  'Es la base que se va a multiplicar'
  })

  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    description: "Se usa para imprimir en consola la lista de multiplicaciones",
  })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        description: 'Define el limite hasta el cual se va a multiplicar la base'
    })
    .option('c', {
        alias: 'complete',
        type: 'boolean',
        default: false,
        description: 'Calcula todos las tablas de multiplicacion de 0 a 10'
    })
    .option('i', {
        alias: 'list',
        type: 'string',
        description: 'Lista los elementos de un archivo dado el path'
    })
  
    ;

module.exports = argv;
