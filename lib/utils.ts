export const checkDateHour = (date: string): string => {
  const givenDate = new Date(date);
  const currentDate = new Date();

  const diffInMilliseconds = currentDate.getTime() - givenDate.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
  return diffInHours < 2 ? "new" : "";
};

export const checkDescription = (description: string): any => {
  return description.includes(",")
    ? description.split(",").map((item) => `- ${item.trim()}`)
    : `- ${description.trim()}`;
};
