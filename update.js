// Aqui se haran las actualizaciones de los datos (Funcional)



function addCity(table, name, temp, max, min){
    return(
        table.addRow({ Name: name, Temperatura: temp, Max: max, Min: min })        
    )
}

function updateCity(table, name, temp, max, min){
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