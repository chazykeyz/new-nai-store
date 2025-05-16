import { formatDistanceToNowStrict } from "date-fns";

export const phoneNumberFormat = (phoneNumber: string): string => {
  const code = phoneNumber.slice(0, 4);
  const first = phoneNumber.slice(4, 7);
  const second = phoneNumber.slice(7, 10);
  const third = phoneNumber.slice(10, 14);

  return `${code} ${first} ${second} ${third}`;
};

interface ErrorObject {
  [field: string]: string[];
}

export const getFirstErrorMessage = (errorObj: ErrorObject): string | null => {
  // Loop through keys in error object
  for (let field in errorObj) {
    if (errorObj[field] && errorObj[field].length > 0) {
      // Return the first error for the first field found
      return errorObj[field][0];
    }
  }
  return null; // Return null if no errors are found
};

export const formatDateLabel = (inputDate: Date | string): string => {
  const date = new Date(inputDate);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;

  if (diffInSeconds < 5) return "Just now";
  if (diffInSeconds < minute)
    return `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;
  if (diffInSeconds < hour) {
    const mins = Math.floor(diffInSeconds / minute);
    return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  }
  if (diffInSeconds < day) {
    const hrs = Math.floor(diffInSeconds / hour);
    return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  }
  if (diffInSeconds < week) {
    const days = Math.floor(diffInSeconds / day);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  }

  // Older than a week – return formatted date
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
