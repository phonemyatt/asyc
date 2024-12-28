import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { EventList } from './events/EventList';
import { AddEventModal } from './events/AddEventModal';
import { Event, EventType } from '../types/events';
import { isSameMonth } from 'date-fns';

interface PersonalEventsProps {
  currentDate: Date;
  events: Event[];
  onAddEvent: (event: Event) => void;
  onDeleteEvent: (id: string) => void;
}

export const PersonalEvents: React.FC<PersonalEventsProps> = ({
  currentDate,
  events,
  onAddEvent,
  onDeleteEvent,
}) => {
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
    onAddEvent(newEvent);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-fun hover:shadow-fun-hover transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-primary">Personal Events</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 rounded-full bg-primary-light hover:bg-primary text-white transition-colors duration-200 animate-bounce-slow"
          aria-label="Add new event"
        >
          <Plus size={24} />
        </button>
      </div>
      
      <EventList 
        events={monthEvents}
        onDelete={onDeleteEvent}
      />

      <AddEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddEvent}
        currentDate={currentDate}
      />
    </div>
  );
};