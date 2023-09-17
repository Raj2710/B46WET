import React,{useState} from 'react'
import Menubar from './common/Menubar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import env from '../env'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import Loader from './common/Loader';
import axios from 'axios'

function Create() {

  let [firstName,setFirstName] = useState("")
  let [lastName,setLastName] = useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let [batch,setBatch] = useState("")
  let [isLoading,setIsLoading] = useState(false)
  let navigate = useNavigate()


  let handleCreate = async()=>{
    try {
      setIsLoading(true)
      let res = await axios.post(`${env.API_URL}/users`,{
        email,
        password,
        firstName,
        lastName,
        batch,
      })
      if(res.status===200)
      {
        setIsLoading(false)
        toast.success(res.data.message)
        navigate('/dashboard')
      }
    } catch (error) {
      setIsLoading(false)
      console.log("Error block",error)
      toast.error(error.response.data.message)
    }
  }
  return <>
  <div>
    <Menubar title={"Create User"}/>
    <h2 style={{textAlign:'center'}}> Create User</h2>
    <div className='container-fluid'>
    <Form>
    <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter First Name" onChange={(e)=>setFirstName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter Last Name" onChange={(e)=>setLastName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={handleCreate}>
         {isLoading?<Loader/>:<>Submit</>}
      </Button>
    </Form>
    </div>
  </div>
  </>
}

export default Create