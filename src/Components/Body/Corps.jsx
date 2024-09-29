import React from 'react'
import Presentation from './Presentation.jsx'
import Apropos from './Apropos.jsx'
import Projet from './Projet.jsx'
import Skills from './Skills.jsx'
import Service from './Service.jsx'
import Contact from './Contact.jsx'


function Corps({profilref,ref2,refprojet1,refprojet2,refprojet3,refskills,formData,handleSubmit}) {
  return (
    <div className="corps">
            <Presentation/> 
            <Apropos ref2={ref2} profilref={profilref}/> 
            <Projet refprojet1={refprojet1} refprojet2={refprojet2} refprojet3={refprojet3}/> 
            <div id='skills' className="skills">
            <h3>Mes compétences</h3>
          <Skills refskills={refskills}/>
            
       
       
      </div>
         <Service/>
          <Contact formData={formData} handleSubmit={handleSubmit}/>
    
    </div>
    


  )
}

export default Corps