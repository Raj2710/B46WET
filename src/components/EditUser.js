import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditUser() {
  let params = useParams()
  let [name,setName] = useState()
  let [email,setEmail] = useState()
  let [mobile,setMobile] = useState()
  let [address,setAddress] = useState()
  let [batch,setBatch] = useState()
  let navigate = useNavigate()

let handleSave = async()=>{
  try {
    let res = await axios.put(`${'https://6486a3c8beba6297278efd7e.mockapi.io/users'}/${params.id}`,{
      name,
      email,
      address,
      mobile,
      batch
    })
    if(res.status===200)
      navigate('/dashboard')
  } catch (error) {
    console.log(error)
  }
}

let getUserData = async()=>{
  try {
    let res = await axios.get(`${'https://6486a3c8beba6297278efd7e.mockapi.io/users'}/${params.id}`)
    if(res.status===200)
    {
      setName(res.data.name)
      setEmail(res.data.email)
      setMobile(res.data.mobile)
      setAddress(res.data.address)
      setBatch(res.data.batch)
    }
  } catch (error) {
      console.log(error)
  }
}

useEffect(()=>{
  if(params.id)
    getUserData()
  else
    navigate('/dashboard')
},[])

//1. Without dependancy array useEffect(()=>{}) --> triggers everytime whena a state changes
//2. With Empty Dependancy array useEffect(()=>{},[]) --> triggers only for the first time of component rendering
//3. Eith Dependancy Array useEffect(()=>{},[name,email]) ->> trrigers only when name or email changes

return <div className='container'>
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
          </div>
  <Form>
  <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Mobile</Form.Label>
      <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Batch</Form.Label>
      <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
    </Form.Group>
   
    <Button variant="primary" onClick={()=>handleSave()}>
      Submit
    </Button>
  </Form>
</div>
}

export default EditUser