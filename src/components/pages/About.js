import React from 'react'

export default function About() {
  return (
//you dont need a div element
//react fragment does not show in the dom hoewver you need it for jsx when you are returning something      
    <React.Fragment>
        <h1>About</h1>
        <p>This is the to do list app v1.0.0</p>
      
    </React.Fragment>
  )
}
