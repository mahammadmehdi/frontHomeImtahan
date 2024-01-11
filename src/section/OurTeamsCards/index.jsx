import React from 'react'
import OurTeamCards from '../../components/OurTeam'
import "./indexd.scss"

function OurTeams() {
  return (
    <div className='ourTeams'>
        <div className="contacts">Contacts</div>
        <div className="name">Our Team</div>
        <div className="cards">
<OurTeamCards image={"https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg"} name={"Velva Kopf"} job={"Biologist"}></OurTeamCards>
<OurTeamCards image={"https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg"} name={"Sarah Palmer"} job={"Florist"}></OurTeamCards>
<OurTeamCards image={"https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg"} name={"Jessica Swift"} job={"Photographer"}></OurTeamCards>


        </div>
    </div>
  )
}

export default OurTeams