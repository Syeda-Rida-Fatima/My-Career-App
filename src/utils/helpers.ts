import {Platform} from 'react-native';

export const stringifyErrorMessage = (error: any) => {
  if (error?.data?.error?.message) {
    return error.data.error.message.toString();
  }
  if (error?.error) {
    return error?.error.toString();
  }
  if (error?.message) {
    return error.message.toString();
  }
  if (error?.data?.error) {
    return error.data.error.toString();
  }
  if (error?.data?.message) {
    return error.data.message.toString();
  }
  return error.toString();
};

export const toggleElemenntInArray = (value: string, array: any[]) => {
  const set = new Set(array);
  if (!set.has(value)) {
    set.add(value);
  } else {
    set.delete(value);
  }
  return [...set];
};

export const addElementInArray = (value: string, array: string[]) => {
  const set = new Set(array);
  if (!set.has(value)) {
    set.add(value);
  }
  return [...set];
};

export const removeElementFromArray = (value: string, array: string[]) => {
  const set = new Set(array);
  if (set.has(value)) {
    set.delete(value);
  }
  return [...set];
};

export const getDates = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const datesArray = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(currentYear, currentMonth, i);
    const day = currentDate.toLocaleString('en-US', {weekday: 'short'});
    const dateObj = {
      date: i,
      day: day.substring(0, 3),
    };
    datesArray.push(dateObj);
  }

  return datesArray;
};

export const getDate = () => {
  const today = new Date();
  return parseInt(today.toLocaleString('en-US', {day: '2-digit'}));
};

export const getFormattedDate = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formattedDate; //'21/06/2023';
};

export const getCurrentDay = () => {
  const currentDate = new Date();
  const options: any = {weekday: 'short'};
  return currentDate.toLocaleDateString('en-US', options);
};

export const getNumericDay = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  return dayOfWeek === 0 ? 7 : dayOfWeek;
};

export const formatDate = (date?: any) => {
  const originalDate = date ? new Date(date) : new Date();
  const day = String(originalDate.getDate()).padStart(2, '0');
  const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = originalDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getFullDate = (day: any) => {
  let today = new Date();
  let year: any = today.getFullYear();
  let month: any = today.getMonth() + 1; // Months are zero-based, so we add 1
  // Pad month and day with leading zeros if necessary
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  return `${year}-${month}-${day}`;
};
export const formatDateYYYYMMDD = (date?: any) => {
  const originalDate = date ? new Date(date) : new Date();
  const day = String(originalDate.getDate()).padStart(2, '0');
  const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = originalDate.getFullYear();
  return `${year}-${month}-${day}`;
};

export const recordHabitDateFormat = (dateInput: any) => {
  if (!dateInput) return;
  // Input date string: "02/07/2022"

  // Split the input date into day, month, and year
  let dateParts = dateInput.split('/');
  let day = parseInt(dateParts[0], 10);
  let month = parseInt(dateParts[1], 10);
  let year = parseInt(dateParts[2], 10);

  // Create a new Date object using the input date
  let date = new Date(year, month - 1, day);

  // Define an array of weekday names
  let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Get the weekday index from the Date object (0 = Sunday, 1 = Monday, etc.)
  let weekdayIndex = date.getDay();

  // Get the weekday name
  let weekdayName = weekdays[weekdayIndex];

  // Get the month name in short form
  let monthName = date.toLocaleString('default', {month: 'short'});

  // Format the output string
  let outputString = weekdayName + ', ' + monthName + ' ' + day;
  return outputString;
};

export const isAndroidDevice = () => Platform.OS === 'android';
export const isIosDevice = () => Platform.OS === 'ios';

export function convertMillisecondsToMinutes(milliseconds: any) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

export function convertMillisecondsToSeconds(milliseconds: any) {
  const seconds = milliseconds / 1000;
  return seconds;
}

export function getHabitType(habit: any) {
  if (habit?.confirm) return 'confirm';
  if (habit?.temporal) return 'temporal';
  if (habit?.proportional) return 'proportional';
  if (habit?.quantitative) return 'quantitative';
  return '';
}

export function getHabitTitle(type: any) {
  if (type === 'confirm') return 'Yes / No';
  if (type === 'temporal') return 'Time Based';
  if (type === 'proportional') return 'Percentage Based';
  if (type === 'quantitative') return 'Quantity Based';
  return null;
}

export function convertSecondsToHHMMSS(timeInseconds: any, inNumber = false) {
  let hours: any = Math.floor(timeInseconds / 3600);
  let remainingSeconds: any = timeInseconds % 3600;
  let minutes: any = Math.floor(remainingSeconds / 60);
  let seconds: any = remainingSeconds % 60;

  // Format hours, minutes, and seconds with leading zeros if necessary
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  if (inNumber) {
    return [+hours, +minutes, +seconds];
  }
  return [hours, minutes, seconds];
}
