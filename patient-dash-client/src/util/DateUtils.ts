
const monthDayModifier = (firstMonth: number, secondMonth: number, firstDay: number, secondDay: number) => {
  if(firstMonth > secondMonth) {
    return 1;
  } else if(firstMonth === secondMonth && firstDay >= secondDay) {
    return 1;
  }
  else {
    return 0;
  }
}

const ageFromDate = (dateOfBirth: Date) => {
  const today = new Date();
  const todayMonth = today.getMonth(), todayDay = today.getDay(), dobMonth = dateOfBirth.getMonth(), dobDay = dateOfBirth.getDay();
  const baseAge = today.getFullYear() - dateOfBirth.getFullYear() - 1;
  return baseAge + monthDayModifier(todayMonth, dobMonth, todayDay, dobDay);
}

export {
  ageFromDate,
};