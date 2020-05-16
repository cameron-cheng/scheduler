export function getAppointmentsForDay(state, day) { 
  const filteredDays = state.days.filter(days => days.name === day);

  let appointment = [];
  if (!appointment){
    return null;
    }else if(filteredDays.length){
  appointment = filteredDays[0].appointments.map(id => state.appointments[id]);
  }
 return appointment;
};