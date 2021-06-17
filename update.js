//Exportamos axios
const axios = require('axios');

// Aqui se haran las actualizaciones de los datos (Funcional)

async function getTemp(url) {
    await axios.get({
        method: "get",
        url: url,
        timeout: 8000
    })
        .then( function (response){
            return response.data.main.temp;
        })
}

async function getMax(url) {
    await axios.get(url)
        .then( function (response){
            return response.data.main.temp_max;
        })
}

async function getMin(url) {
    await axios.get(url)
        .then( function (response){
            return response.data.main.temp_min;
        })
}

function addCity(table, name, temp, max, min, url){
    
    temp = getTemp(url);
    max = getMax(url);
    min = getMin(url);

    return(
        table.addRow({ Name: name, Temperatura: temp, Max: max, Min: min })        
    )
}

function updateCity(table, name, temp, max, min, url){

    temp = getTemp(url);
    max = getMax(url);
    min = getMin(url);

    table.addRow({ Name: name, Temperatura: temp, Max: max, Min: min })
}

function deleteCity(cityName, temp, max, min){
    const {Table} = require('console-table-printer');
    table2 = new Table({
        columns: [{ name: "Name" }, { name: "Temperatura" }, { name: "Max" }, {name: "Min"}],
        filter: (row) => +row.Name !== cityName
      });
      return table2
}


module.exports = {
    addCity,
    updateCity,
    deleteCity,
}