import React from 'react'

function Interest() {
  return (
    <>
    <h2>I'm Interested</h2>
    <div className='container footer' id="interests">
   
      <div className="interest">
      <button type="button" className="btn btn-light">JAVA DEVELOPER</button>
      <button type="button" className="btn btn-light">FRONTEND DEVELOPER</button>
      <button type="button" className="btn btn-light">MERN STACK DEVELOPER</button>
      <button type="button" className="btn btn-light">SOFTWARE DEVELOPER</button>
      <button type="button" className="btn btn-light">SOFTWARE ENGINEER</button>
      <button type="button" className="btn btn-light">FULL STACK DEVELOPER</button>
      </div>
      <div className="contact">
        <h4 style={{textAlign:"center"}}>Contact Me</h4>

        <span>Email : </span> <p>suhanachaudhary212@gmail.com</p>
        <p>suhanasc9149@gmail.com</p>

        <a href="mailto:suhanachaudhary212@gmail.com" className="btn btn-light">Hire me</a>
        
      </div>
      
    </div>
    </>
  )
}

export default Interest
