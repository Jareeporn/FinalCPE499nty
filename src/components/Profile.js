import React from 'react'
import Nav from './Nav'
import profilepic from "../images/nty.jpg"

function Profile() {
    const user = {
        firstName: "Jareeporn",
        lastName: "Sutthinui",
        Number: "6304515",
      }
  return (
    <>
    <Nav/>
    <div>
      <br></br>
      <h6>My name is {user.firstName} {user.lastName} {user.Number} </h6>
      <br></br>
      <img src={profilepic} class = "center"/>
      <br></br>
      <p>Student ID : 6304515</p>

      <p>Computer Engineering From Rangsit University</p>
    
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '115vh', margin: '0' }}>
    </div>
    </div>
    </>
  )
}

export default Profile