import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
    
    <h1>this is contact page</h1>
    <button onClick={()=>{navigate("/param")}}>Click here for Useparam</button>

    </>

  )
}

export default Contact