import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment/";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },

  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Jon Jones",
      interviewer: {
        id: 2,
        name: "Kobe Bryant",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },

  {
    id: 5,
    time: "4pm",
  },
  {
    id: 6,
    time: "5pm",
    interview: {
      student: "Lebron James",
      interviewer: {
        id: 3,
        name: "Vince Carter",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
];

export default function Application(props) {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);
  const appointmentList = appointments.map((appointment) => {
    return <Appointment key={appointment.id} {...appointment} />;
  });
  useEffect(() => {
    axios
      .get(
        `http://localhost:8001/api/days`
      )
      .then((response) => setDays(response.data));
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={days} day={day} setDay={(day) => setDay(day)} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentList}
        <Appointment id="last" time="6pm" />
         
      </section>
    </main>
  );
}
