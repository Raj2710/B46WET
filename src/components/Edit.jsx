import React,{useEffect, useState} from 'react'
import Menubar from './common/Menubar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import env from '../env'
import {toast} from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from './common/Loader';
import axios from 'axios'
import { useLogout } from '../hooks/useLogout';

function Edit() {

    const token = sessionStorage.getItem('token')
  let [firstName,setFirstName] = useState("")
  let [lastName,setLastName] = useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let [batch,setBatch] = useState("")
  let [isLoading,setIsLoading] = useState(false)
  let navigate = useNavigate()
  let params = useParams()
  let {id} = params
  let logout = useLogout()

  let handleEdit = async()=>{
    try {
      setIsLoading(true)
      let res = await axios.put(`${env.API_URL}/users/${id}`,{
        email,
        firstName,
        lastName,
        batch,
      },{
        headers:{
            authorization:`Bearer ${token}`
        }
      })
      if(res.status===200)
      {
        setIsLoading(false)
        toast.success(res.data.message)
        navigate('/dashboard')
      }
    } catch (error) {
      setIsLoading(false)
      toast.error(error.response.data.errorMessage || error.response.data.message)
      if(error.response.status===401)
        logout()
    }
  }

  const getData = async ()=>{
    try {
      let res = await axios.get(`${env.API_URL}/users/${id}`,{
        headers:{
          authorization:`Bearer ${token}`
        }  
      })
      if(res.status===200)
      {
        setFirstName(res.data.data.firstName)
        setLastName(res.data.data.lastName)
        setEmail(res.data.data.email)
        setBatch(res.data.data.batch)
        
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

  useEffect(()=>{
    if(token && id)
    {
        getData()
    }
    else
    {
        logout()
    }
  },[])
  return <>
  <div>
    <Menubar title={"Create User"}/>
    <h2 style={{textAlign:'center'}}> Create User</h2>
    <div className='container-fluid'>
    <Form>
    <Form.Group className="mb-3">
        <Form.Control type="text" value = {firstName} placeholder="Enter First Name" onChange={(e)=>setFirstName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" value = {lastName} placeholder="Enter Last Name" onChange={(e)=>setLastName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="email" value = {email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" value = {batch} placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={handleEdit}>
         {isLoading?<Loader/>:<>Submit</>}
      </Button>
    </Form>
    </div>
  </div>
  </>
}

export default Edit