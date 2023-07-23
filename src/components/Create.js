import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Create() {
  let url = useSelector(state=>state.globalState.url)
  let [title,setTitle] = useState("")
  let [description,setDesc] = useState("")
  let [imageUrl,setImg] = useState("")
  let navigate = useNavigate()
  let handleSubmit = async()=>{
    try {
      let res = await axios.post(url,{title,description,imageUrl})
      if(res.status===201)
        navigate('/blogs')
    } catch (error) {
      
    }
  }
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e)=>setDesc(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>ImageUrl</Form.Label>
        <Form.Control type="text" placeholder="ImageUrl" onChange={(e)=>setImg(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default Create