import React,{useState,useEffect,useRef} from 'react'
import './Details.css'
import { Outlet, useNavigate,useLocation } from 'react-router-dom'
function Details() {
   let location = useLocation()
  let [currentPage,setCurrentPage] = useState(1)
  let navigate = useNavigate()
  let option1 = useRef()

  useEffect(()=>{
   option1.current.click()
  },[])

  return <>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Hooks</h1>
      </div>
     <div className='section-navigator'>
     <ul>
        <li className={currentPage===1?'activePage':''} onClick={()=>{setCurrentPage(1);navigate('useref')}} ref={option1}>useRef</li>
        <li className={currentPage===2?'activePage':''} onClick={()=>{setCurrentPage(2);navigate('usereducer')}}>useReducer</li>
        <li className={currentPage===3?'activePage':''} onClick={()=>{setCurrentPage(3);navigate('bill')}}>Bill Details</li>
        <li className={currentPage===4?'activePage':''} onClick={()=>{setCurrentPage(4);navigate('profile')}}>Profile</li>
        <li className={currentPage===5?'activePage':''} onClick={()=>{setCurrentPage(5);navigate('password')}}>Change Password</li>
      </ul>
     </div>
     <div className='section'>
        <Outlet/>
     </div>
  </>
}

export default Details