// En view.js no se imprimira nada, solo se retornara (Funcional)

const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
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

function selectAction(){
    const message = 'Select action:'
    const choices = ["Add city", "Update city", "Delete city"]
    return inquirer.prompt({
        name: 'choose',
        type: 'list',
        message: message,
        choices: choices
    })
};

function addingCity(){
    const message = 'Location to add? ("q" to quit)'
    return inquirer.prompt([
        {
            name: 'location',
            type: 'input',
            message: message
        }
    ])
};

function deletingCity(array, message){
    return inquirer.prompt([
        {
            name: 'deleted',
            type: 'list',
            message: message,
            choices: array
        }
    ])
};

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
    selectAction,
    addingCity,
    deletingCity
}