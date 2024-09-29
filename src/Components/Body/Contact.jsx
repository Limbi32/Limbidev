import React from 'react'
import Input from '../../Components/Form/Input'
import Textarea from '../../Components/Form/Textarea'

function Contact({formData,handleSubmit}) {
  return (
    <div id='contact' className="contact">
        <h3>Contact</h3>

        <div className="form">
          <form onSubmit={handleSubmit}>
            
            <div className="cont-form">
           
                <Input type='email' placeholder=' Votre mail'   id="email" name="email" value={formData.email} onchange={(e)=>updateFormData({email:e.target.value})}  label='Mail' />
                <Textarea   id="message" name="message" value={formData.message} onchange={(e)=>updateFormData({message:e.target.value})}  />
            </div>
            <button type="submit">Envoyer</button>
          </form>
       
        </div>

       

        </div>
  )
}

export default Contact