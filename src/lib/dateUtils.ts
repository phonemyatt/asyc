import { isSameMonth } from 'date-fns';
import { Holiday } from '../types/calendar';

export const getMonthHolidays = (
  currentDate: Date,
  holidays: Record<string, Holiday>
): Record<string, Holiday> => {
  const currentYear = currentDate.getFullYear();
  const filteredHolidays: Record<string, Holiday> = {};

  Object.entries(holidays).forEach(([dateKey, holiday]) => {
    const [month, day] = dateKey.split('-');
    const holidayDate = new Date(currentYear, parseInt(month, 10) - 1, parseInt(day, 10));
    
    if (isSameMonth(holidayDate, currentDate)) {
      filteredHolidays[dateKey] = holiday;
    }
  });

  return filteredHolidays;
};