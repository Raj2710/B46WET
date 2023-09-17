import React from 'react'
import { useNavigate } from 'react-router-dom'
export const useLogout = ()=>{
    
    let navigate = useNavigate()
  return ()=>{
    sessionStorage.clear()
    navigate('/login')
  }
}