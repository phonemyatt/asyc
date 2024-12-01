import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { EventItem } from './events/EventItem';
import { AddEventModal } from './events/AddEventModal';
import { Event, EventType } from '../types/events';
import { demoEvents } from '../data/demoEvents';
import { isSameMonth } from 'date-fns';

interface PersonalEventsProps {
  currentDate: Date;
}

export const PersonalEvents: React.FC<PersonalEventsProps> = ({ currentDate }) => {
  const [events, setEvents] = useState<Event[]>(demoEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const monthEvents = events.filter(event => 
    isSameMonth(event.date, currentDate)
  );

  const handleAddEvent = (title: string, date: Date, type: EventType) => {
    const newEvent: Event = {
      id: Date.now().toString(),
      title,
      date,
      type,
    };
    setEvents([...events, newEvent]);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-blue-600">Personal Events</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 hover:bg-blue-50 rounded-full transition-colors text-blue-500"
          aria-label="Add new event"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-3">
        {monthEvents.length === 0 ? (
          <p className="text-blue-400 text-center py-4">
            No events this month
          </p>
        ) : (
          monthEvents.map(event => (
            <EventItem
              key={event.id}
              event={event}
              onDelete={handleDeleteEvent}
            />
          ))
        )}
      </div>

      <AddEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddEvent}
      />
    </div>
  );
};