export interface Holiday {
    name: string;
    color: string;
    pattern: string;
  }
  
  export interface CalendarThemes {
    [key: string]: string;
  }
  
  export interface CalendarSizes {
    [key: string]: string;
  }
  
  export const CALENDAR_THEMES: CalendarThemes = {
    default: 'bg-blue-50',
    modern: 'bg-yellow-100',
    dark: 'bg-teal-100 text-blue-800',
    nature: 'bg-pink-100',
    ocean: 'bg-blue-100',
  };
  
  export const CALENDAR_SIZES: CalendarSizes = {
    sm: 'w-full max-w-sm',
    md: 'w-full max-w-md',
    lg: 'w-full max-w-lg',
  };