
import './App.css'
import Profil from './assets/font1.jpg'
import iconmenu from './assets/icon-menu.svg'
import iconmenuclose from './assets/icon-menu-close.svg'
import js from './assets/js.jpg'
import git from './assets/git.jpg'
import jquery from './assets/jquery.jpg'
import node1 from './assets/node1.jpg'
import react from './assets/react.jpg'
import sql from './assets/sql.jpg'
import bootstrap from './assets/bootstrap.jpg'
import mysql from './assets/mysql.jpg'
import figma from './assets/figma.jpg'
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
             <li><a href="">Accueil</a></li>
             <li><a href="">A propos</a></li>
             <li><a href="">Projets</a></li>
             <li><a href="">Contact</a></li>
          
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
            <div className="slide">
            <h1>Developpeur Full-stack</h1>
            <p>LIMBIARISAONA François d'assise</p>
            </div>
            {/* <button>Download CV</button> */}
        </div>
        <div className="about">
              <h3>A Propos</h3>
              <div className="desc">
                <div ref={profilref} className="img">
                    <img src={pdp} alt="" />
                </div>
                <div  ref={ref2} className="renseignement">
                  Je m'appelle LIMBIARISAONA François d'Assise, developpeur web full-stack, disposant un diplome
                  de MASTER en informatique. J'habite a madagascar, j'ai etudié à l'ecole normale a antsiranana.
                  je suis de nationalite malagasy. En ce moment, je travaille en tant que developpeur web 
                  freelance. je suis ici pour vous aider dans votre business, si vous avez besoin d'un site pour booster 
                   votre presence en ligne, je suis à votre disposition. Je peut faire different type de site 
                   que ce soit un site vitrine, un site e-commerce, un site pour un restaurant, etc.... Si vous avez besoin de mes service n'hesitez pas à me
                    contactez.
                </div>
              </div>
        </div>
        <div className="projects">
            <h3>Mes réalisations</h3>
            <div className="list-projects">
              <div ref={refprojet1} className="detail-project">
                <img src={homepage} alt="" />
                <ul className="techno">
                    <li>React</li>
                </ul>
               <div className="visite">
               <p>Homepage</p><a href="">Visiter</a>
               </div>
              </div>
              <div ref={refprojet2} className="detail-project">
                <img src={dessert} alt="https://homepage01.vercel.app/" />
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
        <div className="skills">
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
                <img src={node1} alt="" />
                <p>NODE</p>
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
                <img src={figma} alt="" />
                <p>FIGMA</p>
              </div>
            </div>
        </div>
        <div className="contact">
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
