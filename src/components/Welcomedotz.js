import React from 'react'
import design from '../components/images/dotz.mp4'
import '../components/Video.css'
function Welcomedotz() {
  return (
    <div className='main'>
        < video src={design}autoPlay loop muted/> 
    </div>
  )
}

export default Welcomedotz