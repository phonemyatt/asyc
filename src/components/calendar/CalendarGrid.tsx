import React from 'react';
import { format, isSameMonth, isToday, isWeekend, isSameDay } from 'date-fns';
import { cn } from '../../lib/utils';
import { holidays } from '../../data/holidays';
import { Event, EventColors } from '../../types/events';

interface CalendarGridProps {
  days: Date[];
  currentDate: Date;
  showHolidays: boolean;
  events?: Event[];
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  days,
  currentDate,
  showHolidays,
  events = [],
}) => {
  const getHoliday = (date: Date) => {
    const key = format(date, 'MM-dd');
    return holidays[key as keyof typeof holidays];
  };

  const getDayEvents = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date));
  };

  const getDayClasses = (day: Date) => {
    const baseClasses = 'relative p-2 w-full aspect-square flex flex-col items-center justify-center rounded-full';
    const isCurrentMonth = isSameMonth(day, currentDate);
    const holiday = getHoliday(day);
    const dayEvents = getDayEvents(day);
    
    if (!isCurrentMonth) return cn(baseClasses, 'text-blue-300');
    if (isToday(day)) return cn(baseClasses, 'bg-yellow-400 text-blue-800 font-bold');
    if (holiday || dayEvents.length > 0) return cn(baseClasses, 'font-semibold text-blue-800');
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
          const dayEvents = getDayEvents(day);
          return (
            <div
              key={day.toString()}
              className={getDayClasses(day)}
              title={holiday?.name || dayEvents[0]?.title}
            >
              <span className={cn(holiday || dayEvents.length > 0 ? 'mb-2' : '')}>
                {format(day, 'd')}
              </span>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-1">
                {holiday && (
                  <div 
                    className={cn(
                      'w-4 h-4', // Increased from w-2 h-2
                      holiday.color,
                      holiday.pattern,
                      'rounded-full border border-white shadow-sm'
                    )}
                    aria-label={holiday.name}
                  />
                )}
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className={cn(
                      'w-4 h-4', // Increased from w-2 h-2
                      EventColors[event.type],
                      'rounded-full border border-white shadow-sm'
                    )}
                    aria-label={event.title}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};