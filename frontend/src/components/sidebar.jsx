import React from 'react'
import Cards from './cards'
import { Link} from 'react-router-dom'
import Subscriptions from './subscriptions'



export default function Sidebar() {
  return (
    <>
    <div className="sidebar">
      <div className="home"><a href="">Home</a></div>   
      <div className="Projects"><Link to={'/subscriptions'}>Subscriptions</Link></div>
    </div>
    </>
  )
}
