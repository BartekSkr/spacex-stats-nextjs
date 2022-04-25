//  date formatting
export const dateWithHour = (date: string): string => {
  let dt = new Date(date);
  return dt.toLocaleString();
};

export const dateWithoutHour = (date: string): string => {
  let dt = new Date(date);
  return dt.toLocaleDateString();
};

//  function adds space every 3 digits
export const dataFormat = (num: number) =>
  [num].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
