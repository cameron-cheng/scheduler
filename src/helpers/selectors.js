export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter((days) => days.name === day);

  let appointment = [];
  if (!appointment) {
    return null;
  } else if (filteredDays.length) {
    appointment = filteredDays[0].appointments.map(
      (id) => state.appointments[id]
    );
  }
  return appointment;
}

export function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer]
    return {
      ...interview,
      interviewer
    }
  } 
  return null
}

export function getInterviewersForDay(state, day) {
  const dayObj = state.days.find(dayObj => dayObj.name === day)
  if (dayObj) {
    return dayObj.interviewers.map(id => state.interviewers[id])
  }
  return []
}

export function getSpotsForDay(state, day) {
  return getAppointmentsForDay(state, day).reduce((acc, curr) => {
    return curr.interview === null ? ++acc : acc
  }, 0)
}
