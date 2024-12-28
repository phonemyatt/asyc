import React, { useState, useEffect } from 'react';
import { X, Clock } from 'lucide-react';
import { EventType } from '../../types/events';
import { format, parse, setHours, setMinutes } from 'date-fns';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, date: Date, type: EventType) => void;
  currentDate: Date;
}

export const AddEventModal: React.FC<AddEventModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  currentDate,
}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('12:00');
  const [type, setType] = useState<EventType>('reminder');

  useEffect(() => {
    if (isOpen) {
      setDate(format(currentDate, 'yyyy-MM-dd'));
      setTime('12:00');
      setTitle('');
      setType('reminder');
    }
  }, [isOpen, currentDate]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && date) {
      const [hours, minutes] = time.split(':').map(Number);
      const eventDate = new Date(date);
      const finalDate = setMinutes(setHours(eventDate, hours), minutes);
      onAdd(title, finalDate, type);
      setTitle('');
      setDate('');
      setTime('12:00');
      setType('reminder');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-fun">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary">Add New Event</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-light/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-primary" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary-dark mb-1">
              Event Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border-2 border-primary-light rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter event title"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border-2 border-primary-light rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-primary-light rounded-lg focus:outline-none focus:border-primary"
                  required
                />
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-light pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-dark mb-1">
              Event Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as EventType)}
              className="w-full px-3 py-2 border-2 border-primary-light rounded-lg focus:outline-none focus:border-primary"
            >
              <option value="reminder">Reminder</option>
              <option value="meeting">Meeting</option>
              <option value="task">Task</option>
              <option value="birthday">Birthday</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};