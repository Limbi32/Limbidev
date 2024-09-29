import React from 'react'
import Profil from '../../assets/font1.jpg'

function Presentation() {
  return (
    <div className="presentation">
                          <img  src={Profil} alt="" />
                        <div id='accueil' className="slide">
                          <h1>Developpeur Full-stack</h1>
                          <p>LIMBIARISAONA François d'assise</p>
                        </div>
                        {/* <button>Download CV</button> */}
              </div>

  )
}

export default Presentation