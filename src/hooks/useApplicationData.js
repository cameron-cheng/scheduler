import { useState, useEffect } from "react";
import axios from "axios";
import { getSpotsForDay } from "../helpers/selectors";
const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });
  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    const promise1 = axios.get("/api/days");
    const promise2 = axios.get("/api/appointments");
    const promise3 = axios.get("/api/interviewers");

    Promise.all([promise1, promise2, promise3]).then((all) => {
      setState((prev) => ({
        day: prev.day,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      const days = state.days.map((day) => {
        return {
          ...day,
          spots: getSpotsForDay({ ...state, appointments }, day.name),
        };
      });
      setState({ ...state, appointments, days });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      const days = state.days.map((day) => {
        return {
          ...day,
          spots: getSpotsForDay({ ...state, appointments }, day.name),
        };
      });
      setState({ ...state, appointments, days });
    });
  }

  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;
