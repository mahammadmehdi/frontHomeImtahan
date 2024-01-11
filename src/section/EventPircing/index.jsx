import React from "react";
import EventCards from "../../components/cards";
import "./index.scss"

function EventPircing() {
  return (
    <div className="eventPircing">
        <div className="head">Devoted to wonderful beauty</div>
        <div className="main">Events Pricing</div>
      <div className="eventPircingCards"><EventCards price={"$16"} name={"Birthday Events"}></EventCards>
      <EventCards price={"$31"} name={"Wedding Events"}></EventCards>
      <EventCards price={"$52"} name={"Party Events"}></EventCards></div>
    </div>
  );
}

export default EventPircing;
