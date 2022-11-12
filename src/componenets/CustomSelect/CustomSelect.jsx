import React, { useState } from 'react'
import Select from 'react-select'
import './customselect.css'


const CustomSelect = ({ options }) => {

  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(options[1])


  const customStyles = {
    control: (base, state) => ({
      ...base,

      background: ""
      // match with the menu
      // borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // // Overwrittes the different states of border
      // borderColor: state.isFocused ? "yellow" : "green",
      // // Removes weird border around container
      // boxShadow: state.isFocused ? null : null,
      // "&:hover": {
      //   // Overwrittes the different states of border
      //   borderColor: state.isFocused ? " " : " "
      // }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    })
  };

  return (
    <div>
      <Select className="text-s"
        value={focus ? '' : value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        // defaultValue={value}
        options={options}
        onChange={(item) => {setValue(item);setFocus(false)}}
        styles={customStyles}
      />
    </div>
  )
}

export default CustomSelect

