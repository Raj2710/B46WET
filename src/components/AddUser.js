import React, {useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import {useFormik} from 'formik'
import axios from 'axios';
function AddUser() {
  let navigate = useNavigate()

  let handleSave = async (data)=>{
    try {
      let res = await axios.post(`${'https://6486a3c8beba6297278efd7e.mockapi.io/users'}`,data)
      if(res.status===201)
        navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  let formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      mobile:"",
      address:"",
      batch:""
    },
   validationSchema:Yup.object({
    name: Yup.string().required("Required").min(2,"Minimum 2 Characters Required"),
    email:Yup.string().required("Required").email("Enter a valid email"),
    mobile:Yup.string().required("Required").matches(/^\d{10}$/,"Enter Valid Mobile"),
    address:Yup.string().required("Required"),
    batch:Yup.string().required("Required")
   }),
   onSubmit: (values)=>{
    handleSave(values)
   }
  })

  return <div className='container'>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Add User</h1>
            </div>
    <Form onSubmit={formik.handleSubmit}>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Name"
        id='name'
        name='name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}/>
        {formik.touched.name && formik.errors.name?<div style={{color:"red"}}>*{formik.errors.name}</div>:<></>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter Email" 
        id='email'
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}/>
        {formik.touched.email && formik.errors.email?<div style={{color:"red"}}>*{formik.errors.email}</div>:<></>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Mobile" 
        id='mobile'
        name='mobile'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mobile}/>
        {formik.touched.mobile && formik.errors.mobile?<div style={{color:"red"}}>*{formik.errors.mobile}</div>:<></>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Address" 
        id='address'
        name='address'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}/>
        {formik.touched.address && formik.errors.address?<div style={{color:"red"}}>*{formik.errors.address}</div>:<></>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Batch" 
        id='batch'
        name='batch'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.batch}/>
        {formik.touched.batch && formik.errors.batch?<div style={{color:"red"}}>*{formik.errors.batch}</div>:<></>}
      </Form.Group>
     
      <Button variant="primary" type='submit'>
        Submit
      </Button>
    </Form>
  </div>
}

export default AddUser