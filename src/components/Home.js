import React from 'react'
import Nav from './Nav'
import welcomepic from "../images/welcome.png"
function Home() {

  return (
    <>
    <Nav/>
    <div>
      <br></br>
      <h3>CPE499 FINAL WEB APP🌍</h3>

      <img src={welcomepic} class ="pic"/>
      
    </div>
    </>
  )
}

export default Home