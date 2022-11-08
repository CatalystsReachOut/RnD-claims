import React from 'react'

const SelectInput = ({ options }) => {
    return (
        <select name={options.name} className='select-buttons'>
            {options.inputs?.map((option, index) => (
            <option key={index} selected={option.selected} value={option.value}>{option.label}</option>
            )
            )}
        </select>
    )
}

export default SelectInput