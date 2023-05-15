import React from 'react'
import Background from '../assets/pexels-matilda-wormwood-4099325.jpg'
import '../styles/About.css'
function About() {
  return (
    <div className="about">
      <div 
      className="aboutTop"
      style={{backgroundImage: `url(${Background})`}}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT PROJECT</h1>
        <p>
        In this project we had to build a real time hand - gesture classification system that can
        automatically detect gestures in natural lighting conditions and convert it to text and speech.
        To accomplish this objective, a real time gesture-based system is developed to identify
        gestures.
        </p>
      </div>
    </div>
  )
}

export default About
