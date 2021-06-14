// Aqui se haran las actualizaciones de los datos (Funcional)
/*
Function addCity(name){

}

Function updateCity(){

}

Functioon deleteCity(){

}

*/

function updateTable(actionOption, newCity, removeCity, updateCity){
    const {printTable} = require('console-table-printer');
    const table = new printTable();
    if (actionOption === "1"){
        table.addRow({Name: newCity, Temperature: 0, Max: 0, Min: 0})
    }
    if (actionOption === "2"){
        table.addRow({Name: newCity, Temperature: 0, Max: 0, Min: 0})
    }
    if (actionOption === "3"){
        table.addRow({Name: newCity, Temperature: 0, Max: 0, Min: 0})
    }

}