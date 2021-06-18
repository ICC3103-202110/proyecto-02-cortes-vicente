//Exportamos axios
const axios = require('axios');

// Aqui se haran las actualizaciones de los datos (Funcional)

async function getName(url) {
    let temperature = await axios.get(url)
        .then( function (response){
            return response.data.name;
        })
    return temperature;
}

async function getTemp(url) {
    let temperature = await axios.get(url)
        .then( function (response){
            return response.data.main.temp;
        })
    return temperature;
}

async function getMax(url) {
    let temperature = await axios.get(url)
        .then( function (response){
            return response.data.main.temp_max;
        })
    return temperature;
}

async function getMin(url) {
    let temperature = await axios.get(url)
        .then( function (response){
            return response.data.main.temp_min;
        })
    return temperature;
}

async function addCity(table, name, temp, max, min, url){
    temp = await getTemp(url);
    max = await getMax(url);
    min = await getMin(url);

    return(
        table.addRow({ Name: name, Temperatura: temp, Max: max, Min: min })        
    )
}

async function addArray(type, url)
{
    if(type === "name")
    {
        let name = await getName(url);
        return name;
    }
    else if(type === "temp")
    {
        let temp = await getTemp(url);
        return temp;
    }
    else if(type === "max")
    {
        let max = await getMax(url);
        return max;
    }
    else if(type === "min")
    {
        let min = await getMin(url);
        return min;
    }
    else
    {
        console.log("Error array")
    }
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
    addArray
}