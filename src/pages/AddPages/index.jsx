import React, { useEffect, useState } from 'react'
import "./index.scss"
import { useNavigate } from 'react-router-dom'

function AddPages() {
    const navigate = useNavigate()
    const [price, setInput] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")



   
      function handleSubmit() {
        fetch("http://localhost:3000/",
      {
        method: "POST",
        body: JSON.stringify({
          image: image,
          name: name,
          price: price
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      
      
      
      )
      navigate("/")
      }
  
    
    
  return (
    <div className='addPages'>

        <form className='input' onSubmit={handleSubmit} >
<div className='image'> <h1>Image</h1><input type="text" onChange={(e)=>setImage(e.target.value)} /></div>
<div className='name'> <h1>Name</h1><input type="text" onChange={(e)=>setName(e.target.value)}/></div>
<div className='price'><h1>Price</h1><input type="text"onChange={(e)=>setPrice(e.target.value)} /></div>
 <button className='btn'>Add</button>


        </form>
    </div>
  )
}

export default AddPages