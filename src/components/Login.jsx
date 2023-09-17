import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import env from '../env'
import Loader from './common/Loader';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

function Login() {
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [isLoading,setIsLoading] = useState(false)
    let navigate = useNavigate()

    const handleLogin = async ()=>{
        try {
            setIsLoading(true)
            let res = await axios.post(`${env.API_URL}/users/login`,{
                email,
                password
            })

            if(res.status === 200)
            {   
                setIsLoading(false)
                sessionStorage.setItem('token',res.data.token)
                toast.success(res.data.message)

                navigate('/dashboard')
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(error.response.data.message)
        }
    }
  return (
    
    <div className='loginWrapper'>
        
        <h1>Login Here!</h1>
        <Form>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={handleLogin}>
         {isLoading?<Loader/>:<>Submit</>}
      </Button>
    </Form>
    </div>
  )
}

export default Login