export const formatDateToShortName = (date: Date) => {
  const dateObj = new Date(date);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

  return formattedDate;
};
