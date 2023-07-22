import React,{useContext, useEffect, useState} from 'react'
import Card from "./Card";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate } from 'react-router-dom';
import { DashboardContext } from './context/DashboardContextComponent';
import axios from 'axios';
function Dashboard() {
  let dashboard = useContext(DashboardContext)
  let navigate = useNavigate()
  let [users,setUsers] = useState([])
  let handleDelete = async (i)=>{
    try {
      let res = await axios.delete(`${'https://6486a3c8beba6297278efd7e.mockapi.io/users'}/${i}`)
      if(res.status===200)
        getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  let getUsers = async ()=>{
    try {
      // fetch(`${'https://6486a3c8beba6297278efd7e.mockapi.io/users'}`)
      // .then(res=>res.json())
      // .then(data=>setUsers(data))
      let res = await axios.get(`${'https://6486a3c8beba6297278efd7e.mockapi.io/users'}`)
      setUsers(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])



  return <>
     <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">

                {
                  dashboard.data.map((e,i)=>{
                    return <Card key={i}
                    title={e.title}
                    value={e.value}
                    color={e.color}
                    icon={e.icon}
                    isProgress={e.isProgress}
                    />
                  })
                }

            </div>
      </div>
      <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Batch</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((e,i)=>{
            return <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.address}</td>
              <td>{e.batch}</td>
              <td>
                <Button variant='primary' onClick={()=>{navigate(`/edit-user/${e.id}`)}}>
                  {/* <Link to={`/edit-user/${i}`}>Edit</Link> */}
                  Edit
                </Button>
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
      </div>
      <div>
        <h2>Expectation of a FSD Project</h2>
        <ul>
          <li>Proper Sign In and Signup Flow is expected</li>
          <li>Forgot and reset password</li>
          <li>Should invlov all basic crud application</li>
          <li>Role based App rendering</li>
          <li>Charts or Graphs providing some data</li>
          <li>Export Functionality</li>
          <li>Mobile Responsive</li>

        </ul>
      </div>
  </>
}

export default Dashboard