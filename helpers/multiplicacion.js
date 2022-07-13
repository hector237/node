const fs = require('fs');
const color = require('colors');


let salida, consol = "";
const multiplicar = async (base, listar, limite ) => {
  consol += `Tabla del `.red + color.red(base) + "\n";
  salida += `Tabla del ${base} \n`;
    for (let index = 0; index <= limite; index++) {
      
      consol += `${color.blue(base)} ${"*".green} ${color.blue(index)} ${"=".green} ${color.blue(base * index)}\n`;
      salida += `${base} * ${index} = ${base * index}\n`;
    }
    if (listar) {
        
        console.log(consol);
    }
    try {
        
        fs.writeFileSync(`Tablas de Multiplicar/Tabla del ${base}.txt`, salida);
        return `Tabla del ${base}.txt`

    } catch (error) {
        throw error
    }
};

const complete = async () => { 
     
     for (let number = 0; number <= 10; number++) {
         
         for (let index = 0; index <= 10; index++) {
            salida += `${number} * ${index} = ${number * index}\n`;
          }
        
     }
    
     console.log(salida);
     
     try {
       fs.writeFileSync(
         `Tablas de Multiplicar/Tablas de multiplicar.txt`,
         salida
       );
       return `Tablas de multiplicar.txt`;
     } catch (error) {
       throw error;
     }
 };

module.exports = {
    multiplicar,
    complete
}