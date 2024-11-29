import React from 'react';
import { format } from 'date-fns';
import { Plus, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface Event {
  id: string;
  date: Date;
  title: string;
  type: 'birthday' | 'meeting' | 'reminder';
}

interface PersonalEventsProps {
  currentDate: Date;
}

const demoEvents: Event[] = [
  {
    id: '1',
    date: new Date(2024, 2, 15),
    title: "Mom's Birthday",
    type: 'birthday'
  },
  {
    id: '2',
    date: new Date(2024, 2, 20),
    title: "Team Meeting",
    type: 'meeting'
  },
  {
    id: '3',
    date: new Date(2024, 2, 25),
    title: "Dentist Appointment",
    type: 'reminder'
  }
];

const eventColors = {
  birthday: 'bg-pink-300',
  meeting: 'bg-yellow-400',
  reminder: 'bg-teal-400'
};

export const PersonalEvents: React.FC<PersonalEventsProps> = ({ currentDate }) => {
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const monthEvents = demoEvents.filter(event => 
    event.date.getMonth() === currentMonth && 
    event.date.getFullYear() === currentYear
  );

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-blue-600">Personal Events</h3>
        <button
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
            <div
              key={event.id}
              className="flex items-center justify-between p-3 rounded-full hover:bg-blue-50 transition-colors border-2 border-blue-100"
            >
              <div className="flex items-center space-x-3">
                <div className={cn(
                  'w-8 h-8',
                  eventColors[event.type],
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
              <button
                className="p-2 hover:bg-red-50 rounded-full transition-colors text-red-400 hover:text-red-500"
                aria-label="Delete event"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};