import React,{useState} from 'react'
import './Details.css'
import { Outlet, useNavigate } from 'react-router-dom'
function Details() {
  let [currentPage,setCurrentPage] = useState(1)
  let navigate = useNavigate()
  return <>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Details</h1>
      </div>
     <div className='section-navigator'>
     <ul>
        <li className={currentPage===1?'activePage':''} onClick={()=>{setCurrentPage(1);navigate('accounts')}}>Accounts</li>
        <li className={currentPage===2?'activePage':''} onClick={()=>{setCurrentPage(2);navigate('payments')}}>Payments</li>
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