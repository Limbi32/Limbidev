import React from 'react'
import iconmenu from '../../assets/icon-menu.svg'
import iconmenuclose from '../../assets/icon-menu-close.svg'

function Header({refburger,handlermenu,taille,burgeractive}) {
  return (
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
             <li><a onClick={handlermenu} href="#service">Services</a></li>
             <li><a onClick={handlermenu} href="#contact">Contact</a></li>
          
           </ul>
           {taille<900 && <button onClick={handlermenu} className="menu">
          { burgeractive ? <img src={iconmenu} alt="" />:<img src={iconmenuclose} alt="" />}
          </button> 
           } 
        </nav>
      
      </header>
  )
}

export default Header