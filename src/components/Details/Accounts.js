import React,{useState,useEffect,useRef} from 'react'
import { Button } from 'react-bootstrap'

function Accounts() {
  let [count,setCount] = useState(0)
  let [name,setName]=useState("")
  let countRef = useRef(0)

  let inputRef1 = useRef()
  let inputRef2 = useRef()
  let inputRef3 = useRef()
  let inputRef4 = useRef()

  useEffect(()=>{
    inputRef1.current.focus()
    countRef.current++
  })

  let handleInput1 = (e)=>{
    if(e.key==="Backspace" && inputRef1.current.value.length===0)
    {

    }
    else if(e.key!=="Backspace")
    {
      inputRef2.current.focus()
    }
  }

  let handleInput2 = (e)=>{
    if(e.key==="Backspace" && inputRef2.current.value.length===0)
    {
        inputRef1.current.focus()
    }
    else if(e.key!=="Backspace")
    {
      inputRef3.current.focus()
    }
  }

  let handleInput3 = (e)=>{
    if(e.key==="Backspace" && inputRef3.current.value.length===0)
    {
        inputRef2.current.focus()
    }
    else if(e.key!=="Backspace")
    {
      inputRef4.current.focus()
    }
  }

  let handleInput4 = (e)=>{
    if(e.key==="Backspace" && inputRef4.current.value.length===0)
    {
        inputRef3.current.focus()
    }
    else if(e.key!=="Backspace")
    {
      handleSubmit()
    }
  }



  let handleSubmit = ()=>{
    alert(""+inputRef1.current.value+
      inputRef2.current.value+
      inputRef3.current.value+
      inputRef4.current.value)
  }
  return <>
    <div className="d-sm-flex align-items-center justify-content-left mb-4">
          <h1 className="h3 mb-0 text-gray-800">useRef Section</h1>
      </div>
      <input type='text' placeholder='Name' onChange={(e)=>{
        setName(e.target.value)
        setCount(prev=>prev+1)
      }}/>
      <p>The component have redered {countRef.current} times</p>
      <h2>Enter OTP</h2>
      <div className="d-sm-flex align-items-center justify-content-left mb-4">
          <input type='number' ref={inputRef1} onKeyUp={handleInput1}/>
          <input type='number' ref={inputRef2} onKeyUp={handleInput2}/>
          <input type='number' ref={inputRef3} onKeyUp={handleInput3}/>
          <input type='number' ref={inputRef4} onKeyUp={handleInput4}/>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
}

export default Accounts