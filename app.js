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
const {Table, printTable} = require('console-table-printer');
//const table = new printTable();
const input = require('prompt-sync')();

// Aca "me traigo" los archivos a app.js para poder usarlos
const {update} = require('./update')
const {view} = require('./view')

// Para poder usar las funciones de view.js, es necesario recibirlas
const {showTable, showTitle, selectAction, addingCity, deletingCity} = require('./view')
//const {showActions} = require('./view')

// Para poder usar las funciones de update.js, es necesario recibirlas
const {addCity, updateCity, deleteCity, addArray} = require('./update')


async function app(name, temp, max, min){

    name_list = [];
    temp_list = [];
    max_list = [];
    min_list = [];
    count = 0

    // Para la vista:
    while (true){

        //console.clear()
        console.log(showTitle())
        let table1 = new Table();
        for(var i = 0; i < count; i++)
        {
            //console.log(name_list[i]);
            //console.log(temp_list[i]);
            await table1.addRow({ Nombre: name_list[i], Temperatura: temp_list[i], max: max_list[i] , min: min_list[i]})
        }
        table1.printTable()

        let selectedAction = await selectAction();

        if (selectedAction.choose === 'Add city')
        {
            let city = await addingCity();
            let url_request = "http://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=8343a1428eaf741abd08679a2d799fbb&units=metric";

            name_list.push(city.location);
            //name_list.push(addArray("name", url_request));
            await temp_list.push(await addArray("temp", url_request));
            await max_list.push(await addArray("max", url_request));
            await min_list.push(await addArray("min", url_request));

            count++;

            //addCity(table1, city.location, temp, max, min, url_request);
            // Para salir de la app (si se quiere)
            if (city.location === 'q')
            {
                console.clear(); 
                break;
            }
        }
        if (selectedAction.choose === 'Update city'){
            const message = 'Location to update?';
            var name = await deletingCity(name_list, message);

            let posdel = name_list.indexOf(name.deleted);
            console.log(posdel);
            temp_list.splice(posdel, 1);
            max_list.splice(posdel, 1);
            min_list.splice(posdel, 1);

            let url_request = "http://api.openweathermap.org/data/2.5/weather?q=" + name.deleted + "&appid=8343a1428eaf741abd08679a2d799fbb&units=metric";

            await temp_list.push(await addArray("temp", url_request));
            await max_list.push(await addArray("max", url_request));
            await min_list.push(await addArray("min", url_request));

            //updateCity(table1, name, temp, max, min, url_request)
            // Para salir de la app (si se quiere)
            /*
            if (name === 'q'){
                console.clear() 
                break
            }
            */
        }
        
        if (selectedAction.choose === 'Delete city'){
            const message = 'Location to delete?';
            var name = await deletingCity(name_list, message);

            console.log(name.deleted);

            let posdel = name_list.indexOf(name.deleted);
            console.log(posdel);
            name_list.splice(posdel, 1);
            temp_list.splice(posdel, 1);
            max_list.splice(posdel, 1);
            min_list.splice(posdel, 1);            

            count--;
            /*
            table1 = new Table({deleteCity(cityName, temp, max, min)})
            */
           /*
            if (name === 'q'){
                console.clear() 
                break
            }
            */
        }
        //console.log(name_list)
        //console.log(temp_list)
        //console.log(max_list)
        //console.log(min_list)
        //console.log(count)
    }
}


    //cd JavaScript/Proyecto2

table = ""
app("name",10,15,5);