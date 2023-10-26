const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'este es el número límite donde finaliza la tabla'
    })
    .check((argv, options) => {
        if( isNaN( argv.b )) {
            throw 'La base tiene que ser un número'
        }
        if( isNaN( argv.h )) {
            throw 'El límite hasta tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;