import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Sidebar from "./components/Sidebar";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import EditUser from "./components/EditUser";
import { useState } from "react";
import Details from "./components/Details/Details";
import Accounts from './components/Details/Accounts'
import Bill from './components/Details/Bill'
import Password from './components/Details/Password'
import Payments from './components/Details/Payments'
import Profile from './components/Details/Profile'

function App() {
  let [users,setUsers] = useState([
    {
      name:'Raj',
      email:'raj@gmail.com',
      mobile:'9910910901',
      address:'123, Dubai Main Road, Dubai',
      batch:'B46WET'
    },
    {
      name:'Naga',
      email:'naga@gmail.com',
      mobile:'9019019001',
      address:'123, Dubai Cross Cut Street, Dubai',
      batch:'B46WET'
    },
    {
      name:'Ashwin',
      email:'ashwin@gmail.com',
      mobile:'8918902091',
      address:'432, Dubai Cross Cut Street, Dubai',
      batch:'B46WET'
    }
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>  
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
       <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path='/add-user' element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
          <Route path='/details' element={<Details/>}>
            <Route path='accounts' element={<Accounts/>}/>
            <Route path='bill' element={<Bill/>}/>
            <Route path='password' element={<Password/>}/>
            <Route path='payments' element={<Payments/>}/>
            <Route path='profile' element={<Profile/>}/>
          </Route>
          <Route path='*' element={<Navigate to='/dashboard'/>}/>
       </Routes>
      </div>
      </div>
    </div>
  </BrowserRouter>
  </>
}

export default App;