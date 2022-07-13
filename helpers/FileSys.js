const { readdir, realpath } = require("fs/promises");
const fs = require("fs");
const listDir = async (path = "./Tablas de Multiplicar") => {
    try {
        let fil = '';
    const files = await readdir(path);
            
    for (const file of files) {
        fil += `${file} \n`;
        console.log(file);
        
       
      }
       try {
         fs.writeFileSync(
           `Tablas de Multiplicar/Listado de archivos.json`,
           fil
         );
         return "Listado exportado satisfactoriamente";
       } catch (error) {
         throw error;
       }
  } catch (error) {
    throw error;
  }
};

const fullPath = async (path) => {
    try {
        let fil = '';
        const files = await readdir(path);
            
        for (const file of files) {
            file.fullPath
            console.log(file.fullPath);
       
        }
    } catch (error) {
    throw error;
  }
};

module.exports =  {
    listDir,
    fullPath,
};
