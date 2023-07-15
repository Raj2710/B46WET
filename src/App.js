import React from "react";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Sidebar from "./components/Sidebar";
import {BrowserRouter,Routes,Route, Navigate, useLocation} from 'react-router-dom'
import EditUser from "./components/EditUser";
import { useState } from "react";
import Details from "./components/Details/Details";
import Accounts from './components/Details/Accounts'
import Bill from './components/Details/Bill'
import Password from './components/Details/Password'
import Payments from './components/Details/Payments'
import Profile from './components/Details/Profile'
import UserContextComponent from './components/context/UserContextComponent'
import DashboardContextComponent from './components/context/DashboardContextComponent'
function App() {
  return <>
  <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>  
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
       <Routes>
          <Route path='/dashboard' element={<UserContextComponent>
                                              <DashboardContextComponent>
                                                <Dashboard/>
                                              </DashboardContextComponent>
                                            </UserContextComponent>}/>
          <Route path='/add-user' element={<UserContextComponent><AddUser/></UserContextComponent>}/>
          <Route path='/edit-user/:id' element={<UserContextComponent><EditUser/></UserContextComponent>}/>
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