import React from 'react';
import { format } from 'date-fns';
import { cn } from '../lib/utils';
import { holidays } from '../data/holidays';
import { getMonthHolidays } from '../lib/dateUtils';

interface HolidayListProps {
  showHolidays: boolean;
  currentDate: Date;
}

export const HolidayList: React.FC<HolidayListProps> = ({ showHolidays, currentDate }) => {
  if (!showHolidays) return null;

  const monthHolidays = getMonthHolidays(currentDate, holidays);
  const monthHolidayEntries = Object.entries(monthHolidays);

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-fun hover:shadow-fun-hover transition-shadow duration-300">
      <h3 className="text-xl font-bold text-primary mb-4">
        Holidays in {format(currentDate, 'MMMM yyyy')}
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {monthHolidayEntries.length === 0 ? (
          <p className="text-blue-400 text-center py-4">
            No holidays this month
          </p>
        ) : (
          monthHolidayEntries.map(([date, { name, color, pattern }]) => {
            const [month, day] = date.split('-');
            const holidayDate = new Date(currentDate.getFullYear(), parseInt(month, 10) - 1, parseInt(day, 10));
            
            return (
              <div
                key={date}
                className="flex items-center space-x-3 p-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                <div className={cn(
                  'w-8 h-8',
                  color,
                  pattern,
                  'rounded-full border-2 border-white shadow-sm'
                )} />
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-blue-700">{name}</span>
                  <span className="text-sm text-blue-400">
                    {format(holidayDate, 'MMMM d, yyyy')}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};