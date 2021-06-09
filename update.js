
function transform_value(value, begin_unit, end_unit)
{
    if(begin_unit.begin_unit === 'Kelvin')
    {
        if(end_unit.end_unit === 'Kelvin')
        {
            return value.value;
        }
        else if(end_unit.end_unit === 'Celsius')
        {
            return (value.value - 273.15);
        }
        else
        {
            return ((value.value - 273.15)*(9/5) + 32);
        }
    }
    else if(begin_unit.begin_unit === 'Celsius')
    {
        if(end_unit.end_unit === 'Kelvin')
        {
            return (value.value + 273.15);
        }
        else if(end_unit.end_unit === 'Celsius')
        {
            return value.value;
        }
        else
        {
            return ((value.value * (9/5)) + 32);
        }
    }
    else
    {
        if(end_unit.end_unit === 'Kelvin')
        {
            return (((value.value - 32) * 5/9) + 273.15);
        }
        else if(end_unit.end_unit === 'Celsius')
        {
            return ((value.value - 32) * 5/9);
        }
        else
        {
            return value.value;
        }
    }
}

function update(model, choose_left, value, begin_unit, end_unit)
{
    if(choose_left == true)
    {
        const transformed_value = transform_value(value, begin_unit, end_unit);
        console.log(transformed_value);
        return {
            ...model,
            choose_left: choose_left,
            left_value: value.value,
            left_unit: begin_unit.begin_unit,
            right_value: transformed_value,
            right_unit: end_unit.end_unit,
        }
    }
    else
    {
        const transformed_value = transform_value(value, begin_unit, end_unit);
        return {
            ...model,
            choose_left: choose_left,
            left_value: transformed_value,
            left_unit: end_unit.end_unit,
            right_value: value.value,
            right_unit: begin_unit.begin_unit,
        }
    }
};

// Exportation
module.exports = {
    update
}