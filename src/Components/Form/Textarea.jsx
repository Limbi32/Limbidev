import React from 'react'

function Textarea({message,id,label,onchange,value,cols}) {
  return (
    <>
        <label htmlFor={id} >Message</label>
            <textarea name={message}  value={value} onChange={onchange} id={id} cols="30" rows="10"></textarea>
    </>
  )
}

export default Textarea