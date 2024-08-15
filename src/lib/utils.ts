import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const duration = {
  seconds: (n: number) => n * 1000,
  minutes: (n: number) => n * duration.seconds(60),
  hours: (n: number) => n * duration.minutes(60),
  days: (n: number) => n * duration.hours(24),
  weeks: (n: number) => n * duration.days(7),
  months: (n: number) => n * duration.days(30),
  years: (n: number) => n * duration.days(365),
}
