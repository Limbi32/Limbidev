
import './App.css'
import Profil from './assets/font1.jpg'
import iconmenu from './assets/icon-menu.svg'
import iconmenuclose from './assets/icon-menu-close.svg'
import js from './assets/js.jpg'
import git from './assets/git.jpg'
import jquery from './assets/jquery.jpg'
import node1 from './assets/node1.jpg'
import express1 from './assets/express.jpg'
import laravel from './assets/laravel.png'
import react from './assets/react.jpg'
import sql from './assets/sql.jpg'
import bootstrap from './assets/bootstrap.jpg'
import mysql from './assets/mysql.jpg'
import wordpress from './assets/wordpress.png'
import homepage from './assets/homepage.jpg'
import dessert from './assets/dessert.jpg'
import galerie from './assets/galerie.jpg'
import pdp from './assets/pdp.jpg'
import Input from './Components/Form/Input'
import Textarea from './Components/Form/Textarea'
import { useEffect, useRef, useState } from 'react'





function App() {

    const [value,setValue]=useState('')
    const [value1,setValue1]=useState('')
    const [taille, setTalle]=useState(window.innerWidth)
    const [burgeractive,setBurgeractive]=useState(true)
    const  observer1=new IntersectionObserver((entries)=>{
    
     
      for (const entry of entries) {
   
        if (entry.isIntersecting) {
          entry.target.animate([ 
            {transform:'translateX(100px)',opacity:0},
            {transform:'translateX(50px)',opacity:1}
          ],{
            duration: 500
          })
        }
      }
    })

    const  observer2=new IntersectionObserver((entries)=>{
    
     
      for (const entry of entries) {
   
        if (entry.isIntersecting) {
          entry.target.animate([ 
            {transform:'translateY(10px)',opacity:0},
            {transform:'translateY(0)',opacity:1}
          ],{
            duration: 500
          })
        }
      }
    })
    const ref2=useRef(null)
    const refskills=useRef(null)
    const refprojet1=useRef(null)
    const refprojet2=useRef(null)
    const refprojet3=useRef(null)
    const profilref=useRef(null)
    const refburger=useRef(null)

    // const handlermenu1=()=>{
    //   setBurgeractive(!burgeractive)
    //   if (burgeractive===false) {
    //     refburger.current.classList.remove('active')
    //   }
    // }

    const handlermenu=()=>{
      setBurgeractive(!burgeractive)
      if (burgeractive===false) {
        refburger.current.classList.remove('active')
      }else{
        refburger.current.classList.add('active')
      }
      console.log(refburger.current.classList);
    }
   const changetaille=()=>{
    setTalle(window.innerWidth)
   }
    console.log(taille);

    const handleChange=(e)=>{
      setValue(e.target.value)
    }

    const handleChange1=(e)=>{
      setValue1(e.target.value)
    }
   

    useEffect(()=>{
      observer1.observe(ref2.current)
      observer1.observe(profilref.current)
      observer1.observe(refprojet1.current)
      observer1.observe(refprojet2.current)
      observer1.observe(refprojet3.current)
      observer2.observe(refskills.current)
      window.addEventListener('resize',changetaille)
    },[])
  return (
    <>
      
     <div className="container">
     <header>
        <div className="logo">
          Limbi Dev
        </div>
       
        <nav>
        
                <ul ref={refburger} className=''>
             <li><a onClick={handlermenu} href="#accueil">Accueil</a></li>
             <li><a onClick={handlermenu} href="#propos">A propos</a></li>
             <li><a onClick={handlermenu} href="#projet">Projets</a></li>
             <li><a onClick={handlermenu} href="#skills">Compétences</a></li>
             <li><a onClick={handlermenu} href="#contact">Contact</a></li>
          
           </ul>
           {taille<900 && <button onClick={handlermenu} className="menu">
          { burgeractive ? <img src={iconmenu} alt="" />:<img src={iconmenuclose} alt="" />}
          </button> 
           } 
        </nav>
      
      </header>
      <div className="corps">
        
        <div className="presentation">
        <img  src={Profil} alt="" />
            <div id='accueil' className="slide">
            <h1>Developpeur Full-stack</h1>
            <p>LIMBIARISAONA François d'assise</p>
            </div>
            {/* <button>Download CV</button> */}
        </div>
        <div id='propos' className="about">
              <h3>A Propos</h3>
              <div className="desc">
                <div ref={profilref} className="img">
                    <img src={pdp} alt="" />
                </div>
                <div  ref={ref2} className="renseignement">
              
<p>
Je suis LIMBIARISAONA François d'Assise, Développeur Web Full Stack Freelance
Passionné par le développement web et l'innovation technologique, je suis LIMBIARISAONA
 François d'Assise, un développeur web full stack avec un an d'expérience dans la création 
 de solutions numériques complètes. Mon objectif est de transformer vos idées en applications 
 et sites web performants, élégants et fonctionnels.

</p>
<p>
Ce que je fais :
En tant que développeur web full stack, je prends en charge chaque aspect du développement de vos projets :

Développement Frontend : Création d'interfaces utilisateur modernes et réactives en utilisant
 HTML, CSS, JavaScript et des frameworks tels que React, Vue.js ou Angular. J'assure que vos sites 
 sont non seulement esthétiques mais aussi optimisés pour tous les appareils.

Développement Backend : Conception et gestion des aspects serveur de vos applications avec
 des technologies comme Node.js, Python, Ruby on Rails, PHP ou Java. Je m'assure que la logique métier
  est robuste, sécurisée et évolutive.

Gestion de Bases de Données : Conception et optimisation de bases de données SQL
 (MySQL) pour garantir une gestion efficace des données.

Intégration et Déploiement : Mise en place de pipelines CI/CD pour automatiser les déploiements, 
gestion des environnements de staging et de production, et déploiement sur des plateformes telles 
qu'AWS, Heroku ou DigitalOcean.

Optimisation et Maintenance : Analyse des performances des applications, 
correction des bugs et mise à jour continue pour garantir une expérience utilisateur 
fluide et sécurisée.

</p>
<p>
  
<h5>Pourquoi me choisir ?</h5>

<ul>
  <li>Expertise Complète : Avec une maîtrise approfondie des technologies frontend et backend, 
je vous offre une solution intégrée qui couvre tous les aspects de vos projets web.</li>
  <li>Approche Personnalisée : Je prends le temps de comprendre
 vos besoins spécifiques et de vous offrir des solutions adaptées qui répondent à vos objectifs.</li>
  <li>Qualité et Fiabilité : Mon engagement est de livrer des projets de haute qualité, 
dans les délais impartis et en respectant le budget convenu.</li>
</ul>






Contactez-moi !
Vous avez un projet en tête ou des questions sur mes services ? N'hésitez pas à me contacter pour discuter de vos besoins. Je suis disponible pour des consultations gratuites et je serais ravi de vous aider à réaliser vos idées.

</p>
Email :bondmandev@gmail.com
Téléphone :+261324325888

Merci de visiter mon portfolio. J'ai hâte de collaborer avec vous !

                </div>
              </div>
        </div>
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
        <div id='skills' className="skills">
            <h3>Mes compétences</h3>
            <div ref={refskills} className="list-skills">
             
             
              <div className="desc-skills">
                <img src={js} alt="" />
                <p>JAVASCRIPT</p>
              </div>
              <div className="desc-skills">
                <img src={react} alt="" />
                <p>REACT</p>
              </div>
              <div className="desc-skills">
                <img src={express1} alt="" />
                <p>EXPRESS JS</p>
              </div>
              <div className="desc-skills">
                <img src={node1} alt="" />
                <p>NODE</p>
              </div>
              <div className="desc-skills">
                <img src={laravel} alt="" />
                <p>PHP/LARAVEL</p>
              </div>
              <div className="desc-skills">
                <img src={git} alt="" />
                <p>GIT</p>
              </div>
              <div className="desc-skills">
                <img src={jquery} alt="" />
                <p>JQUERY</p>
              </div>
              <div className="desc-skills">
                <img src={bootstrap} alt="" />
                <p>BOOTSTRAP</p>
              </div>
              <div className="desc-skills">
                <img src={sql} alt="" />
                <p>SQL</p>
              </div>
              <div className="desc-skills">
                <img src={mysql} alt="" />
                <p>MYSQL</p>
              </div>
              <div className="desc-skills">
                <img src={wordpress} alt="" />
                <p>WORDPRESS</p>
              </div>
            </div>
        </div>

        <div className="service">
          
        </div>
        <div id='contact' className="contact">
        <h3>Contact</h3>

        <div className="form">
       
            <div className="cont-form">
            <Input type='text' placeholder='Sujet de votre message'  value={value} onchange={handleChange} label='Subject' />
            <Input type='email' placeholder=' Votre mail' value={value1} onchange={handleChange1}  label='Mail' />
            <Textarea />
            </div>
            <button>Envoyer</button>
       
        </div>
        </div>
      </div>
      <footer>
        <div className="rsociau">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="cop">
          Copyright 2024 @ LIMBIARISAONA François d'assise
        </div>
     </footer>
     </div>
     
    </>
  )
}

export default App
