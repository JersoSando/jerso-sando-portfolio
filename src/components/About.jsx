import React from 'react'
import Skiils from './Skiils'
import picture from '../resources/profile.png'
import secondpicture from '../resources/profile-two.png'

export default function About() {
  return (
    <div>
      
        <span className='images'>
        <img className='picture' src={picture} />
        <img className='picture' src={secondpicture} />
        </span>
        <div className='information'>
        <div className='column-left'>
        <h1>About Me</h1>
        <p>
          Before becoming a web developer, I graduated with my Bachelors in Biology at the University of Minnesota-Duluth. After graduating
                I worked as a behavioral therapist with young kids. After a while, I wanted something more challenging and got into coding.
                I fell in love with problem solving and building websites from the ground up. 
    
                When I'm not coding, I love reading, running, and hanging out with my friends and family. 
                I love to travel and will always search out the best coffee and bookstores wherever I go.
        </p>
        </div>
                {/* <hr/> */}
        <div className='column-right'>
        <Skiils />
        </div>
        </div>
    </div>
  )
}
