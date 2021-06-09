// Importation
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');

function view_title()
{
    return chalk.green(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
};

function view_table(model)
{
    const {left_value} = model;
    const {left_unit} = model;
    const {right_value} = model;
    const {right_unit} = model;
    
    return [{
        'leftValue': left_value,
        'leftUnit': left_unit,
        'rightValue': right_value,
        'rightUnit': right_unit}
    ];
};

function input_is_left(model)
{
    const {choose_left} = model;
    const message = 'Left temperarture is source? ';
    return inquirer.prompt([
        {
            name: 'choose_left',
            type: 'confirm',
            message: message,
            default: choose_left
        }
    ])
};

function input_value(model)
{
    const {choose_left} = model;
    const message = 'Temperataure value to convert? ';
    if(choose_left == true)
    {
        const {left_value} = model;
        return inquirer.prompt([
            {
                name: 'value',
                type: 'number',
                message: message,
                default: left_value
            }
        ])
    }
    else
    {
        const {right_value} = model;
        return inquirer.prompt([
            {
                name: 'value',
                type: 'number',
                message: message,
                default: right_value
            }
        ])
    }
};

function input_begin_unit(){
    const message = 'From? '
    const choices = ["Celsius", "Fahrenheit", "Kelvin"]
    return inquirer.prompt({
        name: 'begin_unit',
        type: 'list',
        message: message,
        choices: choices
    })
};

function input_end_unit(){
    const message = 'To? '
    const choices = ["Celsius", "Fahrenheit", "Kelvin"]
    return inquirer.prompt({
        name: 'end_unit',
        type: 'list',
        message: message,
        choices: choices
    })
};

function visual(model)
{
    return{
        title: view_title(),
        table: view_table(model)
    };
};

module.exports = {
    input_is_left,
    input_value,
    input_begin_unit,
    input_end_unit,
    visual
};