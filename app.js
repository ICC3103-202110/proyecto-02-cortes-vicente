// Lo primero que se hizo fue instalar las librerias recomendadas
// en el enunciado. Para eso se ejecuto:
// npm init 
// npm install console-table-printer inquirer figlet chalk prompt-sync axios
// en el terminal (en la carpeta correspondiente)

// En app.js estara todo lo que es no funcional (estado de la aplicacion,
// while, inputs, etc) (No Funcional)

// Sin atntes para usar la API tenemos que usar una key al suscribirse a openweathermap:
// key: 8343a1428eaf741abd08679a2d799fbb

// Aqui defino los comandos de las librerias
const {Table} = require('console-table-printer');
//const table = new printTable();
const input = require('prompt-sync')();

// Aca "me traigo" los archivos a app.js para poder usarlos
const {update} = require('./update')
const {view} = require('./view')

// Para poder usar las funciones de view.js, es necesario recibirlas
const {showTable} = require('./view')
const {showActions} = require('./view')
const {showTitle} = require('./view')
// Para poder usar las funciones de update.js, es necesario recibirlas
const {addCity} = require('./update')
const {updateCity} = require('./update')
const {deleteCity} = require('./update')

function app(name, temp, max, min){

    table1 = new Table();
    table2 = new Table();

    // Para la vista:
    while (true){
        console.clear()
        console.log(showTitle())
        showTable(table1, name, temp, max, min)
        console.log(showActions())
        var actionSelection = input("Select an action (1,2,3): ")        
        // Para la interaccion con el usuario (no funcional):

        if (actionSelection === "1"){
            var name = input("Location? (q for quit)  ")
            addCity(table1, name, temp, max, min)
            // Para salir de la app (si se quiere)
            if (name === 'q'){
                console.clear() 
                break
            }
        }
        if (actionSelection === "2"){
            var name = input("Location to update? ")
            updateCity(table1, name, temp, max, min)
            // Para salir de la app (si se quiere)
            if (name === 'q'){
                console.clear() 
                break
            }
        }
        
        if (actionSelection === "3"){
            var cityName = input("Location to delete? ")
            /*
            table1 = new Table({deleteCity(cityName, temp, max, min)})
            */
            if (name === 'q'){
                console.clear() 
                break
            }
        }
    }
}

table = ""
app(0,0,0,0)