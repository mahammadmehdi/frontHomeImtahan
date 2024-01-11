import React from 'react'
import "./index.scss"

function EventCards({price,name}) {
  return (
    <div className='eventCards '>
        <div className='price'><h1 className="text">{price}</h1><span>per table</span></div> 
        <div className="name">{name}</div>
        <div className="about">Lorem ipsum dolor sit amet laudem partem perfecto per</div>
        <button className='btn'>Shop Now</button>
    </div>
  )
}

export default EventCards