import React, { useState, useEffect, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from './context/UserContextComponent';

function EditUser() {

  let context = useContext(UserContext)
  let params = useParams()
  let [name,setName] = useState()
  let [email,setEmail] = useState()
  let [mobile,setMobile] = useState()
  let [address,setAddress] = useState()
  let [batch,setBatch] = useState()
  let navigate = useNavigate()

let handleSave = ()=>{
  let newArray = [...context.users]
  newArray.splice(params.id,1,{name,email,mobile,address,batch})
  context.setUsers(newArray)
  navigate('/dashboard')
}

useEffect(()=>{
  if(params.id < context.users.length)
  {
    setName(context.users[params.id].name)
    setEmail(context.users[params.id].email)
    setMobile(context.users[params.id].mobile)
    setAddress(context.users[params.id].address)
    setBatch(context.users[params.id].batch)
  }
  else
  {
    alert("Invalid User Id")
    navigate('/dashboard')
  }
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