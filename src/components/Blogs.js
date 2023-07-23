import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAll,toggleStatus } from '../redux/blogSlice'

import Table from 'react-bootstrap/Table'; 
import axios from 'axios'
function Blogs() {
  const globalState = useSelector(state=>state.globalState)
  const dispatch = useDispatch()
  
  let getData = async()=>{
    try {
      let res = await axios.get(globalState.url)
      if(res.status===200)
      {
          dispatch(setAll(res.data))
      }
  } catch (error) {
      console.log(error)
  }
}

  let toggleBlog = async (i,status)=>{
      try{
        dispatch(toggleStatus(i))
        let res = await axios.put(`${globalState.url}/${i}`,{
          active_flag:status
        })
        if(res.status===200)
          getData()
      }
      catch(error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          globalState.blogs.map((e)=>{
            return <tr>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.description}</td>
              <td><img src={e.imageUrl} style={{height:"150px",width:"150px"}}/></td>
              <td>
              <label class="switch">
                <input type="checkbox" checked={e.active_flag} onClick={()=>toggleBlog(e.id,!e.active_flag)}/>
                <span class="slider round"></span>
              </label>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </>
}

export default Blogs