import React from 'react';
import { format } from 'date-fns';
import { Trash2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Event, EventColors } from '../../types/events';

interface EventItemProps {
  event: Event;
  onDelete?: (id: string) => void;
}

export const EventItem: React.FC<EventItemProps> = ({ event, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-full hover:bg-blue-50 transition-colors border-2 border-blue-100">
      <div className="flex items-center space-x-3">
        <div className={cn(
          'w-8 h-8',
          EventColors[event.type],
          'rounded-full border-2 border-white shadow-sm'
        )} />
        <div className="flex flex-col">
          <span className="text-base font-semibold text-blue-700">
            {event.title}
          </span>
          <span className="text-sm text-blue-400">
            {format(event.date, 'MMMM d, yyyy')}
          </span>
        </div>
      </div>
      {onDelete && (
        <button
          onClick={() => onDelete(event.id)}
          className="p-2 hover:bg-red-50 rounded-full transition-colors text-red-400 hover:text-red-500"
          aria-label="Delete event"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};