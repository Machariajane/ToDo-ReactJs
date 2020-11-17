import React from 'react' //type rfc tab
import { Link } from 'react-router-dom'
// this is a function component
//for a class component we have various lifecycle like render,component devmount
//for a function cmpnt we have 1 return that works like a render 
export default function Header() {
  return (
    <header style={headerStyle}>
        <h1>
            TodoList
        </h1>
        <Link style={linkStyle} to="/">Home</Link> |  
        <Link  style={linkStyle} to="/about"> About</Link>
    </header>
  )
}
 const headerStyle = {
     background: '#333',
     color: '#fff',
     textAlign: 'center',
     padding: '8px'
 }

 const linkStyle ={
   color: '#fff',
   textDecoration: 'none'
 }