export function getAppointmentsForDay(state, day) {
  let result;
  if (state.days.name === day) {
    for (let appointmentId of state.days.appointment) {
      if (appointmentId === state.appointments.id) {
        result = appointmentId
      } else {
        result = [];
      }
    }
  }
  return result;
}


