// Lo primero que se hizo fue instalar las librerias recomendadas
// en el enunciado. Para eso se ejecuto:
// npm init 
// npm install console-table-printer inquirer figlet chalk prompt-sync axios
// en el terminal (en la carpeta correspondiente)

// En app.js estara todo lo que es no funcional (estado de la aplicacion,
// while, inputs, etc) (No Funcional)

// Aqui defino los comandos de las librerias
const {printTable} = require('console-table-printer')
const input = require('prompt-sync')();

// Aca "me traigo" los archivos a app.js para poder usarlos
const {update} = require('./update')
const {view} = require('./view')

// Para poder usar las funciones de view.js, es necesario recibirlas
const {showTable} = require('./view')
const {showTitle} = require('./view')
// Para poder usar las funciones de update.js, es necesario recibirlas
const {rightValeuUpdate} = require('./update')

function app(name, temp, max, min){

    // Para la vista:
    while (true){
        console.clear()
        console.log(showTitle())
        printTable(showTable(name, temp, max, min))


        
        // Para la interaccion con el usuario (no funcional):
        if (actionSelection() === "1"){
            var newCity = input("Location? (q for quit)  ")
            printTable.addRow({Name: newCity})
            // Para salir de la app (si se quiere)
            if (name === 'q'){
                console.clear() 
                break
            }
        }
        if (actionSelection() === "2"){
            var name = input("Location to update? ")
            // Para salir de la app (si se quiere)
            if (name === 'q'){
                console.clear() 
                break
            }
        }
        if (actionSelection() === "3"){
            var name = input("Location to delete? ")
            if (name === 'q'){
                console.clear() 
                break
            }
        }
    }
}


app(0,0,0,0)