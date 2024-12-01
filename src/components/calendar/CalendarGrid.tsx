import React from 'react';
import { format, isSameMonth, isToday, isWeekend } from 'date-fns';
import { cn } from '../../lib/utils';
import { Holiday } from '../../types/calendar';

interface CalendarGridProps {
  days: Date[];
  currentDate: Date;
  holidays: Record<string, Holiday>;
  showHolidays: boolean;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  days,
  currentDate,
  holidays,
  showHolidays,
}) => {
  const getHoliday = (date: Date) => {
    const key = format(date, 'MM-dd');
    return holidays[key as keyof typeof holidays];
  };

  const getDayClasses = (day: Date) => {
    const baseClasses = 'relative p-2 w-full aspect-square flex flex-col items-center justify-center rounded-full';
    const isCurrentMonth = isSameMonth(day, currentDate);
    const holiday = getHoliday(day);
    
    if (!isCurrentMonth) return cn(baseClasses, 'text-blue-300');
    if (isToday(day)) return cn(baseClasses, 'bg-yellow-400 text-blue-800 font-bold');
    if (holiday) return cn(baseClasses, 'font-semibold text-blue-800');
    if (isWeekend(day)) return cn(baseClasses, 'text-pink-300 font-medium');
    return cn(baseClasses, 'text-blue-600');
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-bold text-blue-500 text-sm">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const holiday = showHolidays && getHoliday(day);
          return (
            <div
              key={day.toString()}
              className={getDayClasses(day)}
              title={holiday?.name}
            >
              <span className={cn(holiday ? 'mb-2' : '')}>
                {format(day, 'd')}
              </span>
              {holiday && (
                <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  <div 
                    className={cn(
                      'w-6 h-6',
                      holiday.color,
                      holiday.pattern,
                      'rounded-full border-2 border-white shadow-sm'
                    )}
                    aria-label={holiday.name}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};