import React from 'react'
import Select from 'react-select'

const CustomSelect = ({options}) => {

    
  return (
    <div>
        <Select className="text-s"
        defaultValue={options[1]}
        options={options}/>
    </div>
  )
}

export default CustomSelect