// En view.js no se imprimira nada, solo se retornara (Funcional)

const figlet = require('figlet')
const chalk = require('chalk')
const { Table } = require('console-table-printer')

// --------------------------------- Titulo --------------------------------- //

function showTitle(){
    return (
        chalk.blueBright(
            figlet.textSync(
                'Weather App!',
            {
                horizontalLayout: 'full',
                font: 'ANSI Shadow'
            }
            )
        )
    )
}

function showActions(){
    return("\n" + "1) Add city. " + "\n" + "2) Update city. " + "\n" + "3) Delete city" + "\n")
}

function showTable(table, name, temp, max, min){
    return(
        table.printTable(name, temp, max, min)
    )
}

// Para que app.js pueda leer la funciones de view.js, es necesario exportarlas:

module.exports = {
    showTable,
    showTitle,
    showActions,
}