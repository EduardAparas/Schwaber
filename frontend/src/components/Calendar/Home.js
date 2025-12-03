import React, { useState } from "react";
import CalendarView from "./CalendarView";
import IcsUploader from "./IcsUploader";

const { REACT_APP_BACKEND_URL } = process.env;

function Home({ redirect = true }) {
  const [events, setEvents] = useState([]);

  const handleEventsLoaded = (newEvents) => {
    setEvents(newEvents);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <h2 style={{ marginBottom: "10px" }}>Calendario</h2>
      <IcsUploader
        onEventsLoaded={handleEventsLoaded}
        backendUrl={REACT_APP_BACKEND_URL  || "http://localhost:4000"}
      />
      <CalendarView events={events} />
    </div>
  );
}

export default Home;