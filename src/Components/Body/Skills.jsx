import React from 'react'
import js from '../../assets/js.jpg'
import git from '../../assets/git.jpg'
import jquery from '../../assets/jquery.jpg'
import node1 from '../../assets/node1.jpg'
import express1 from '../../assets/express.jpg'
import laravel from '../../assets/laravel.png'
import react from '../../assets/react.jpg'
import bootstrap from '../../assets/bootstrap.jpg'
import mysql from '../../assets/mysql.jpg'
import wordpress from '../../assets/wordpress.png'

function Skills({refskills}) {
  return (
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
      <img src={mysql} alt="" />
      <p>MYSQL</p>
    </div>
    <div className="desc-skills">
      <img src={wordpress} alt="" />
      <p>WORDPRESS</p>
    </div>
  </div>
  )
}

export default Skills