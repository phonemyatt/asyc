import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

interface CalendarHeaderProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onDateChange,
}) => {
  return (
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
  );
};