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

async function addArray(type, url)
{
    if(type === "name")
    {
        let name = await getName(url);
        name = await getName(url);
        return name;
    }
    else if(type === "temp")
    {
        let temp = await getTemp(url);
        temp = await getTemp(url);
        return temp;
    }
    else if(type === "max")
    {
        let max = await getMax(url);
        max = await getMax(url);
        return max;
    }
    else if(type === "min")
    {
        let min = await getMin(url);
        min = await getMin(url);
        return min;
    }
    else
    {
        console.log("Error array")
    }
}


module.exports = {
    addArray
}