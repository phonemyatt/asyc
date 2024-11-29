import React from 'react';
import { holidays } from './Calendar';
import { cn } from '../lib/utils';

interface HolidayListProps {
  showHolidays: boolean;
}

export const HolidayList: React.FC<HolidayListProps> = ({ showHolidays }) => {
  if (!showHolidays) return null;

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-200">
      <h3 className="text-xl font-bold text-blue-600 mb-4">Holidays</h3>
      <div className="grid grid-cols-1 gap-3">
        {Object.entries(holidays).map(([date, { name, color, pattern }]) => (
          <div
            key={date}
            className="flex items-center space-x-3 p-3 rounded-full hover:bg-blue-50 transition-colors border-2 border-blue-100"
          >
            <div className={cn(
              'w-8 h-8',
              color,
              pattern,
              'rounded-full border-2 border-white shadow-sm'
            )} />
            <span className="text-base font-semibold text-blue-700">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};