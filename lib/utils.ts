import { Timestamp } from "@firebase/firestore";

export const isWithin3Days = (timestamp: Timestamp | string): boolean => {
  const createdDate = typeof timestamp === "string" ? new Date(timestamp) : timestamp.toDate();
  const now = new Date();

  const diffMs = now.getTime() - createdDate.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24); // convert ms to days

  return diffDays < 3;
};

export const checkDescription = (description: string): string | string[] => {
  return description.includes(",")
    ? description.split(",").map((item) => `- ${item.trim()}`)
    : `- ${description.trim()}`;
};

export const formatRelativeTime = (isoString: string): string => {
  const target = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - target.getTime();

  const sec = Math.floor(diffMs / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);

  if (day >= 1) return `${day}d`;
  if (hr >= 1) return `${hr}h`;
  if (min >= 1) return `${min}m`;
  return "just now";
};
