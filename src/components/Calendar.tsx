import React from 'react';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addDays,
  getDay,
} from 'date-fns';
import { cn } from '../lib/utils';
import { themes, sizes } from '../data/calendarThemes';
import { CalendarHeader } from './calendar/CalendarHeader';
import { CalendarGrid } from './calendar/CalendarGrid';
import { Event } from '../types/events';

interface CalendarProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  theme: string;
  size: 'sm' | 'md' | 'lg';
  showHolidays: boolean;
  events?: Event[];
}

export const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  onDateChange,
  theme = 'default',
  size = 'md',
  showHolidays = true,
  events = [],
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = addDays(monthStart, -getDay(monthStart));
  const days = eachDayOfInterval({ start: startDate, end: monthEnd });

  return (
    <div className={cn(
      themes[theme as keyof typeof themes],
      sizes[size],
      'p-6 rounded-2xl shadow-xl border-2 border-blue-200'
    )}>
      <CalendarHeader 
        currentDate={currentDate}
        onDateChange={onDateChange}
      />
      <CalendarGrid
        days={days}
        currentDate={currentDate}
        showHolidays={showHolidays}
        events={events}
      />
    </div>
  );
};