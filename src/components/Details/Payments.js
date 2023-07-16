import React,{useReducer,useState} from 'react'
import { Button } from 'react-bootstrap'
const initialValue = {
  count:0,
  name:""
}

function reducer(state,payload){
  switch(payload.action)
  {
    case 'INC' : return { ... state, count:state.count+1}

    case 'DEC' : return { ... state, count:state.count-1}

    case 'CHANGENAME': return {...state, name:payload.name}
  }
}
function Payments() {
  let [state,dispatch] = useReducer(reducer,initialValue)
  return <>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">useReducer</h1>
    </div>
    <div>
      <Button onClick={()=>{dispatch({action:'DEC'})}}>-</Button>
      &nbsp;
      {state.count}
      &nbsp;
      <Button onClick={()=>{dispatch({action:'INC'})}}>+</Button>
    </div>
    <div>
      <input type='text' placeholder='Name' onChange={(e)=>dispatch({
        action:'CHANGENAME',
        name:e.target.value
      })}/>
    </div>
    <div>
      The Entered Name is {state.name}
    </div>
  </>
}

export default Payments