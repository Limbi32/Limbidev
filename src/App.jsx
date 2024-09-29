
import './App.css'
import Header from './Components/Header/Header.jsx'
import Corps from './Components/Body/Corps.jsx'
import Skills from './Components/Body/Skills.jsx'
import Service from './Components/Body/Service.jsx'
import Contact from './Components/Body/Contact.jsx'
import { useEffect, useReducer, useRef, useState } from 'react'
import emailjs from 'emailjs-com';



function App() {

  
  const [taille, setTalle]=useState(window.innerWidth)
  const [burgeractive,setBurgeractive]=useState(true)
  const ref2=useRef(null)
  const refskills=useRef(null)
  const refprojet1=useRef(null)
  const refprojet2=useRef(null)
  const refprojet3=useRef(null)
  const profilref=useRef(null)
  const refburger=useRef(null)


  const reducer=(prev,next)=>({...prev,...next})

  const [formData, updateFormData] = useReducer(reducer,{
    email: '',
    message: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm( " service_45hulk9 " , " template_qgnyoia ", formData, "kqQAYpvGadYtaqqYz")
      .then((result) => {
        alert('Email sent successfully!');
      }, (error) => {
        alert('Failed to send email. Please try again.');
      });

  
  };

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


    const  observer1=new IntersectionObserver((entries)=>{
    
     
      for (const entry of entries) {
   
        if (entry.isIntersecting) {
          entry.target.animate([ 
            {transform:'translateY(10px)',opacity:0},
            {transform:'translateY(0px)',opacity:1}
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
        
        <Header refburger={refburger} 
        handlermenu={handlermenu}
         taille={taille}
          burgeractive={burgeractive}/>

        <Corps  profilref={profilref} ref2={ref2} refprojet1={refprojet1} refprojet2={refprojet2} refprojet3={refprojet3}
        
       refskills={refskills} handleSubmit={handleSubmit} formData={formData} />
      
       
       
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
