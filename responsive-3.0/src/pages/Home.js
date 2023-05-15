import React, { useState } from 'react'
import bannerImage from '../assets/banner-image.jpg'
import '../styles/Home.css'
import Camera from '../Components/Camera'

function Home() {

  const [showCamera , setShowCamera] = useState(false);
  const closeCamera = () => setShowCamera(false);

  return (
    <>
    <div className='home' 
    style={{background: `url(${bannerImage})` }}>
        <div className="headerContainer">
          <h1>Gesture Recognition</h1>
          <p>just a click away</p>
      

          <button className='try-now' onClick={() => setShowCamera(true)} >Try now</button>
          {showCamera && <Camera closeCamera={closeCamera} showCamera={showCamera} />}
          
        </div>
    </div>
    </>
    
  )
}

export default Home
