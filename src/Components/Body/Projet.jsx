import React from 'react'
import homepage from '../../assets/homepage.jpg'
import dessert from '../../assets/dessert.jpg'
import galerie from '../../assets/galerie.jpg'

function Projet({refprojet1,refprojet2,refprojet3}) {
  return (
    <div id='projet' className="projects">
            <h3>Mes réalisations</h3>
            <div className="list-projects">
                    <div ref={refprojet1} className="detail-project">
                              <img src={homepage} alt="" />
                              <ul className="techno">
                                  <li>React</li>
                              </ul>
                            <div className="visite">
                            <p>Homepage</p><a href="https://homepage01.vercel.app/">Visiter</a>
                            </div>
                    </div>

                    <div ref={refprojet2} className="detail-project">
                            <img src={dessert} alt="" />
                              <ul className="techno">
                                <li>React</li>
                                <li>Node js</li>
                            </ul>
                            <div className="visite">
                            <p>Produit-List</p><a href="https://liste-produit.vercel.app/">Visiter</a>
                            </div>
                    </div>

                    <div ref={refprojet3} className="detail-project">
                            <img src={galerie} alt="" />
                              <ul className="techno">
                                <li>Html</li>
                                <li>Css</li>
                                <li>Javascript</li>
                            </ul>
                            <div className="visite">
                            <p>Galerie filtrable</p><a href="https://galerie-filtrable.vercel.app/">Visiter</a>
                            </div>
                    </div>

            </div>
        </div>
  )
}

export default Projet