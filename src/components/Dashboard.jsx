import axios from 'axios'
import React, { useEffect,useState } from 'react'
import env from '../env'
import {toast} from 'react-toastify'
import {useLogout} from '../hooks/useLogout'
import Menubar from './common/Menubar'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const token = sessionStorage.getItem('token')
  let navigate = useNavigate()
  let [data,setData] = useState([])
  let logout = useLogout()
  const getData = async ()=>{
    try {
      let res = await axios.get(`${env.API_URL}/users`,{
        headers:{
          authorization:`Bearer ${token}`
        }  
      })
      if(res.status===200)
      {
        setData(res.data.data)
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
      if(error.response.status===401)
      {
        
        logout()
      }
    }
  }

  const handleDelete = async (id)=>{
    try {
      let res = await axios.delete(`${env.API_URL}/users/${id}`,{
        headers:{
          authorization:`Bearer ${token}`
        }  
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
        getData()
      }
    } catch (error) {
      toast.error(error.response.data.message)
      if(error.response.status===401)
        logout()
    }
  }

  useEffect(()=>{
    if(token)
      getData()
    else
    {
      logout()
    }
  },[])
  return (
    <div>
      <Menubar title="Dashboard"/>
      <div className="table-wrapper">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Batch</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.batch}</td>
              <td>
                  <Button onClick={()=>navigate(`/edit/${e._id}`)}>Edit</Button>
                  &nbsp; 
                  <Button variant='danger' onClick={()=>handleDelete(e._id)}>Delete</Button></td>
            </tr>
          })
        }
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default Dashboard