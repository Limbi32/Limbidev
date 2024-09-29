import React from 'react'
import frontend from '../../assets/frontend.png'
import backend from '../../assets/backend.jfif'
import bdd from '../../assets/bdd.jfif'
import deploie from '../../assets/deploie.jfif'
import maintien from '../../assets/maintien.jfif'

function Service() {
  return (
    <div  id='service' className="service">
    <h3>Mes services</h3>
       <div className="list-service">
            <div className="service1">
                  <h4> Développement Frontend</h4>
                  <img src={frontend} alt="" />
                  <p>
                  Création d'interfaces utilisateur modernes et réactives  
                  </p>
              </div>

            <div className="service2">
                  <h4> Développement Backend </h4>
                  <img src={backend} alt="" />
                  <p>Conception et gestion des aspects serveur de vos applications </p>
              </div>

            <div className="service3">
              
                  <h4> Gestion de Bases de Données</h4>
                  <img src={bdd} alt="" />
                  <p>
                  Conception et optimisation de bases de données
                  </p>
              </div>

            <div className="service4">
                  <h4> Intégration et Déploiement</h4>
                  <img src={deploie} alt="" />
                  <p>
                  Déploiement sur des plateformes telles 
      qu'AWS, Heroku ou DigitalOcean
                  </p>
              </div>

            <div className="service5">
              
                  <h4>  Optimisation et Maintenance</h4>
                  <img src={maintien} alt="" />
                  <p>
                  Analyse des performances des applications
                  </p>
              </div>
              
       </div>
    </div>
  )
}

export default Service