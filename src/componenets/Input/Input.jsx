import React from 'react'
// import './input.css'

const Input = ({type ,title,id,name},ref) => {
  
  return (
    <div className='homepage'>
        <input type={type}  
        id={id}
        placeholder=" "
        name={name} ref= {ref} className="block w-full appearance-none bg-transparent focus:outline-none"/>
      <label htmlFor={id} style={{color : "var(--highlight-grey-color"}} className="absolute top-3 -z-1 duration-300 origin-0">{title}</label>
        </div>
        
  )
}

const forwardRef = React.forwardRef(Input);

export default forwardRef