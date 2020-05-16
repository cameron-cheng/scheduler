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
    const student = interview.student;
    const interviewer = state.interviewers[interview.interviewer];
    const interviewData = { student, interviewer };
    return interviewData;
  } else {
    return null;
  }
}
