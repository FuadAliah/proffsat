export const checkDate = (date) => {
  const givenDate = new Date(date);
  const currentDate = new Date();

  const diffInMilliseconds = currentDate.getTime() - givenDate.getTime();
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  return diffInDays < 3 ? "new" : "";
};
