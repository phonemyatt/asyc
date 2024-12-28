import React from 'react';
import { 
  format, 
  isSameMonth, 
  isEqual,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addDays,
  getDay
} from 'date-fns';
import { cn } from '../../lib/utils';
import { holidays } from '../../data/holidays';
import { Event } from '../../types/events';

interface CalendarGridProps {
  currentDate: Date;
  showHolidays: boolean;
  events?: Event[];
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentDate,
  showHolidays,
  events = [],
  selectedDate = new Date(),
  onDateSelect = () => {},
}) => {
  // Get all days we need to display
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = addDays(monthStart, -getDay(monthStart));
  const days = eachDayOfInterval({ start: startDate, end: monthEnd });

  // Helper functions
  const getHoliday = (date: Date) => {
    if (!showHolidays) return null;
    const key = format(date, 'MM-dd') as keyof typeof holidays;
    return holidays[key] || null;
  };

  const getDayEvents = (date: Date) => {
    return events.filter(event => isEqual(date, event.date));
  };

  const hasEvents = (date: Date) => {
    return getDayEvents(date).length > 0 || !!getHoliday(date);
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="grid grid-cols-7 gap-2">
      {/* Weekday headers */}
      {weekDays.map((day) => (
        <div
          key={day}
          className="h-10 flex items-center justify-center font-semibold text-primary"
        >
          {day}
        </div>
      ))}

      {/* Calendar days */}
      {days.map((date, i) => {
        const isToday = isEqual(date, new Date());
        const isSelected = isEqual(date, selectedDate);
        const isCurrentMonth = isSameMonth(date, currentDate);
        const holiday = getHoliday(date);
        
        return (
          <button
            key={i}
            onClick={() => onDateSelect(date)}
            className={cn(
              "h-12 rounded-lg flex items-center justify-center transition-all duration-200",
              "hover:bg-primary-light/10 relative",
              {
                "bg-primary text-white hover:bg-primary-dark": isSelected,
                "bg-secondary-light/20 text-secondary-dark font-semibold": isToday && !isSelected,
                "text-primary-dark": isCurrentMonth && !isSelected,
                "text-primary-light/50": !isCurrentMonth && !isSelected,
              }
            )}
            title={holiday?.name}
          >
            <span className={cn(
              "z-10 relative",
              { "animate-wiggle": hasEvents(date) }
            )}>
              {format(date, "d")}
            </span>
            
            {/* Event indicators */}
            {hasEvents(date) && (
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
                {holiday && (
                  <span className={cn(
                    'w-1.5 h-1.5 rounded-full',
                    holiday.color
                  )} />
                )}
                {getDayEvents(date).length > 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                )}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};