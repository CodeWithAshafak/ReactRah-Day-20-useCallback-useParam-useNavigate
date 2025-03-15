import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'





const Param = () => {
  const navigate = useNavigate()
  const {name} = useParams()
  return (
    <>
    <h1>this is param page </h1>
    <h1>Welcome to : {name}</h1>
    <button onClick={()=>{navigate("/home")}}>Click for home</button>
    </>
  )
}

export default Param