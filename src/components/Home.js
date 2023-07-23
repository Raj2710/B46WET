import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux';
import { setAll } from '../redux/blogSlice';

import axios from 'axios'
function Home() {
  let globalState = useSelector(state=>state.globalState)
  let dispatch = useDispatch()
  let activeBlogs = globalState.blogs.filter((e)=>e.active_flag)

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

useEffect(()=>{
  getData()
},[])
  return <>
    <div className='wrapper'>
      {
        activeBlogs.map(e=>{
          return <CardItem title={e.title} description = {e.description} imageUrl={e.imageUrl} key= {e.id}/>
        })
      }
    </div>
  </>
}

function CardItem({title,description,imageUrl}){
  return <>
    <Card style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Text>
          {
            description
          }
        </Card.Text>
      </Card.Body>
    </Card>
  </>
}

export default Home