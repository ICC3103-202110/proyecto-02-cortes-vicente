// En view.js no se imprimira nada, solo se retornara (Funcional)

const figlet = require('figlet')
const chalk = require('chalk')

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

function showTable(name, temp, max, min){
    return [
        {Name: name, Temperature: temp, Max: max, Min: min}
    ]  
}

// Para que app.js pueda leer la funciones de view.js, es necesario exportarlas:

module.exports = {
    showTable,
    showTitle,
}