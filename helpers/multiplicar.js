const colors = require('colors');

const fs = require('fs');
// const crearArchivo = (base = 5) => {
//     return new Promise( (resolve, reject) => {
//         console.log(`   Tabla del ${base}`);
//         let salida = '';
//         for (let index = 1; index <= 10; index++) {
//             salida += `${base} x ${index} = ${base * index}\n`;
//         }
//         console.log(salida);
        
//         // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//         //     if (err) throw err;
//         //     console.log(`tabla-${base}.txt creada`);
//         // })
        
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla-${base}.txt creada`);
//     })
// }

const crearArchivo = async(base=5, listar=false, hasta=10) => {
    try {
        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${base} ${'x'.magenta} ${index} ${'='.magenta} ${base * index}\n`;
        }

        if (listar) {
            console.log('Tabla del'.green, colors.cyan( base ));
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
}