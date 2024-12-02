import React from 'react';
import { EventItem } from './EventItem';
import { Event } from '../../types/events';

interface EventListProps {
  events: Event[];
  onDelete: (id: string) => void;
}

export const EventList: React.FC<EventListProps> = ({ events, onDelete }) => {
  if (events.length === 0) {
    return (
      <p className="text-blue-400 text-center py-4">
        No events this month
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {events.map(event => (
        <EventItem
          key={event.id}
          event={event}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};