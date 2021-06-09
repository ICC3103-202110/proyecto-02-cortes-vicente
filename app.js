const {input_is_left, input_value, input_begin_unit, input_end_unit, visual} = require('./view');
const {init_model} = require('./model');
const {update} = require('./update');
const {printTable} = require('console-table-printer');

const state = {
    model: init_model,
    view_model: visual(init_model)
}


async function app(state, visual, update){
    while (true){
        const {model, view_model} = state;
        const {title, table} = view_model;

        console.clear();
        console.log(title)
        printTable(table)
        
        const {choose_left} = await input_is_left(model);
        const value = await input_value(model);
        const begin_unit = await input_begin_unit(model);
        const end_unit = await input_end_unit(model);
        const updated_model = update(model, choose_left, value, begin_unit, end_unit);

        state = {
            ...state,
            model: updated_model,
            view_model: visual(updated_model)
        }
    }
}

app(state, visual, update);