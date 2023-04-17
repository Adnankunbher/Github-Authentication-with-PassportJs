import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Cards from './cards';


function TodoList() {
  // const [tasks, setTasks] = useState([]);
  // useEffect(() => {
  //   setTimeout(()=>{
  //     getUser();

  // },1000)
  //   fetchTasks()
  // }, [])

  // const fetchTasks = async () => {
  //   try {
  //     await axios.get('http://localhost:3001/todo/get', {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then(result => setTasks(result.data))
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  // const [fullname, setFullname] = useState([])
  // const [description, setDescription] = useState([])

  // const buttonToggle = async () => {
  //   try {
  //     await axios.post('http://localhost:3001/todo/add', {
  //       fullname: fullname,
  //       description: description
  //     }).then(setInterval = () => {
  //       setFullname('')
  //       setDescription('')
  //     }, 100)
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  //}

  return (
    <>


      {/* <div className="addtodo">
     <MDBBtn onClick={buttonToggle} className='mr-12'>Add ToDO</MDBBtn>
     <MDBInput className='todoInpt' onChange={(e)=> setFullname(e.target.value)} placeholder="Write Todo Here----"></MDBInput>
     <MDBInput className='tododesc' onChange={(e)=> setDescription(e.target.value)} placeholder="Write Todo Description Here----"></MDBInput>
    </div> */}
        <div className='dashboard'>
        <Sidebar />
        {/* {tasks.map((task,index)=>{
        return(
        <MDBCard className='w-50' key={task._id}>
        <MDBCardBody key={index}>
          <MDBCardTitle>{task.fullname}</MDBCardTitle>
          <MDBCardText>{task.description}</MDBCardText>
          <MDBBtn href='#'>Delete</MDBBtn>
        </MDBCardBody>
        </MDBCard>)
      })} */}
        <Cards />

      </div>
        
      
    </>
  )
}



// return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task._id}>
//           <h3>{task.fullname}</h3>
//           <p>{task.description}</p>
//         </li>
//       ))}
//     </ul>
// );
// }

export default TodoList;
