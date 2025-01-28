import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const cName = "cybrom";
  const navigate = useNavigate()
  return (
    <>
     <button onClick={()=>{navigate(`/param/${cName}`)}} >Goto param</button>
    
    </>
  )
}

export default Service