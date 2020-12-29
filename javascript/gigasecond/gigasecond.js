export const gigasecond = (date) => {
  const birthDate = date;
  const anniversaryDate = new Date(birthDate.getTime() + 1e12);

  return anniversaryDate;
};
