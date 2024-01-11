import React from "react";
import OurMission from "../../section/ourMission";
import FlowerPircing from "../../section/FlowerPricing";
import EventPircing from "../../section/EventPircing";
import OurTeams from "../../section/OurTeamsCards";

function Home() {
  return (
    <div>
      <OurMission></OurMission>
      <FlowerPircing></FlowerPircing>
      <EventPircing ></EventPircing>
      <OurTeams></OurTeams>
    </div>
  );
}

export default Home;
