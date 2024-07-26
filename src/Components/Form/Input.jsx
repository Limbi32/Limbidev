import React from 'react'

function Input({placeholder,onclick,onchange,label,id,value,type}) {
  return (
    <>  <label htmlFor={id}>{label}</label>
        <input type={type} value={value} placeholder={placeholder} onClick={onclick} onChange={onchange} id={id} />
    </>
  )
}

export default Input