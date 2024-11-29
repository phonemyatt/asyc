import React from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  isWeekend,
  addDays,
  getDay,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface CalendarProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  theme: string;
  size: 'sm' | 'md' | 'lg';
  showHolidays: boolean;
}

const themes = {
  default: 'bg-blue-50',
  modern: 'bg-yellow-100',
  dark: 'bg-teal-100 text-blue-800',
  nature: 'bg-pink-100',
  ocean: 'bg-blue-100',
};

const sizes = {
  sm: 'w-full max-w-sm',
  md: 'w-full max-w-md',
  lg: 'w-full max-w-lg',
};

export const holidays = {
  '01-01': { 
    name: 'New Year\'s Day', 
    color: 'bg-blue-500',
    pattern: 'holiday-dots'
  },
  '02-14': { 
    name: 'Valentine\'s Day', 
    color: 'bg-pink-300',
    pattern: 'holiday-hearts'
  },
  '03-17': { 
    name: 'St. Patrick\'s Day', 
    color: 'bg-teal-400',
    pattern: 'holiday-clovers'
  },
  '07-04': { 
    name: 'Independence Day', 
    color: 'bg-yellow-400',
    pattern: 'holiday-stars'
  },
  '10-31': { 
    name: 'Halloween', 
    color: 'bg-yellow-400',
    pattern: 'holiday-pumpkins'
  },
  '11-25': { 
    name: 'Thanksgiving', 
    color: 'bg-teal-400',
    pattern: 'holiday-leaves'
  },
  '12-25': { 
    name: 'Christmas Day', 
    color: 'bg-blue-500',
    pattern: 'holiday-trees'
  },
};

export const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  onDateChange,
  theme = 'default',
  size = 'md',
  showHolidays = true,
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = addDays(monthStart, -getDay(monthStart));
  const days = eachDayOfInterval({ start: startDate, end: monthEnd });

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
    <div className={cn(
      themes[theme as keyof typeof themes],
      sizes[size],
      'p-6 rounded-2xl shadow-xl border-2 border-blue-200'
    )}>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => onDateChange(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
          className="p-2 hover:bg-blue-100 rounded-full transition-colors text-blue-600"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-blue-600">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <button
          onClick={() => onDateChange(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
          className="p-2 hover:bg-blue-100 rounded-full transition-colors text-blue-600"
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

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
    </div>
  );
};