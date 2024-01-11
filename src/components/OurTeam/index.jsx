import React from 'react'
import "./index.scss"

function OurTeamCards({image,name,job}) {
  return (
    <div className='ourTeamsCards'>
<img src={image} alt="" />
<div className="name">{name}</div>
<div className="job">{job}</div>
    </div>
  )
}

export default OurTeamCards