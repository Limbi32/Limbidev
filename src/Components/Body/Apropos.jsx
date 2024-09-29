import React from 'react'
import pdp from '../../assets/pdp.jpg'

function Apropos({ref2,profilref}) {
  return (
    <div id='propos' className="about">
    <h3>A Propos</h3>
    <div className="desc">
          <div ref={profilref} className="img">
              <img src={pdp} alt="" />
          </div>
      <div  ref={ref2} className="renseignement">
                                  
                      <p>
                      Je suis LIMBIARISAONA François d'Assise, Développeur Web Full Stack Freelance
                      Passionné par le développement web et l'innovation technologique, avec deux(02) années d'expériences dans la création 
                      de solutions numériques complètes. Mon objectif est de transformer vos idées en applications 
                      et sites web performants, élégants et fonctionnels.

                      </p>

                      <p>
                                      
                          Contactez-moi !
                          Vous avez un projet en tête ou des questions sur mes services ? N'hésitez pas à me
                          contacter pour discuter de vos besoins. Je suis disponible pour
                          des consultations gratuites et je serais ravi de vous aider à réaliser vos idées.
                      </p>
                      <p>

                              <h4>Pourquoi me choisir ?</h4>

                              <ol>
                              <li>Expertise Complète : Avec une maîtrise approfondie des technologies frontend et backend, 
                              je vous offre une solution intégrée qui couvre tous les aspects de vos projets web.</li>
                              <li>Approche Personnalisée : Je prends le temps de comprendre
                              vos besoins spécifiques et de vous offrir des solutions adaptées qui répondent à vos objectifs.</li>
                              <li>Qualité et Fiabilité : Mon engagement est de livrer des projets de haute qualité, 
                              dans les délais impartis et en respectant le budget convenu.</li>
                              </ol>




                          <span>Email:</span> bondmandev@gmail.com <br />
                          <span>Téléphone:</span> +261324325888 <br />

                          Merci de visiter mon portfolio. J'ai hâte de collaborer avec vous!
                      </p>


      </div>
    </div>
    </div>
  )
}

export default Apropos