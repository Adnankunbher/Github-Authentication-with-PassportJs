import './App.css';
import Signin from './components/signin';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from 'react';
import axios from 'axios'
import TodoList from './components/dashboard';
import Signup from './components/Signup';



function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async() => {
      await fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
       
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
         // console.log(resObject.user);
          setUser(resObject.user);
          setLoading(false); // set loading to false once the API call has completed
        })
        .catch((err) => {
          console.log(err);
          setLoading(false); // set loading to false even if the API call has failed
        });
    };
     
    getUser();
    console.log(user)
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path='/' index element={<Signin/>}/>
        <Route path='/dashboard' element={<TodoList/>} />
        <Route path='/login' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        {/* <Route path='/post/:id' element={user ? <Post/> :<Navigate to={'/login'}/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
