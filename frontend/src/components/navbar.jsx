import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function Navbar() {
  const [user, setUser] = useState('')
  const [login, setLogin] = useState(false)
  const [data, showData] = useState(false)

  const navigate = useNavigate()
  const navbarurl = (uri) => {
    window.open(`http://localhost:3001/${uri}`, '_self')
  }
 const getUser = () => {
  fetch("http://localhost:3001/auth/login/success", {
    method: 'GET',
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      throw new Error("authentication has been failed!");
    })
    .then((resObject) => {
      setUser(resObject.user);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleLogout = () => {
    navbarurl('auth/logout')
  };
// useEffect(()=>{
//   getUser()
// },[handleLogout])
  
// const [username,setusername]= useState('')
// const [img,setImg]= useState('')
// const getUserdata=async(req,res)=>{
//   await axios.get('http://localhost:3001/todo/get').then((result)=>{
//     console.log(result.data.forEach(element => {
//       console.log(ele)
//     }))
//   })
// }

  

  useEffect(() => {
    getUser()
    if (localStorage.getItem("accessToken")){
      setLogin(true)
    }
  }, [navigate]);


  return (<>

    
      <div className="navbar">
      
        <div className="leftpart">:
          <span><img src="R.png" width={'100px'} /></span>
        </div> { user.GoogleId ? (
        <div className="lastpart">
          <div className="userdetails" style={{display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div className="image"><img src={user.avatar} alt={"profile_Image"} style={{borderRadius:'20px',height:'40px',width:'40px'}}/></div>
            <div className="username" style={{fontSize:'12px'}}>{user.name}</div>
          </div>
          <div className="logout">
            <button onClick={handleLogout}>LogOut</button>
          </div>
        </div>) : (
            <Link to="/login">Login</Link>
 )
}
      </div>

  </>

  )
}
