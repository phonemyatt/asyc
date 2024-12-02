import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { EventType } from '../../types/events';
import { format } from 'date-fns';

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
  const [type, setType] = useState<EventType>('reminder');

  useEffect(() => {
    if (isOpen) {
      setDate(format(currentDate, 'yyyy-MM-dd'));
      setTitle('');
      setType('reminder');
    }
  }, [isOpen, currentDate]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && date) {
      onAdd(title, new Date(date), type);
      setTitle('');
      setDate('');
      setType('reminder');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-blue-50 rounded-full transition-colors text-blue-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-blue-600 mb-6">Add New Event</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-blue-600 mb-2">
              Event Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-2 border-blue-200 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter event title"
              required
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-blue-600 mb-2">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border-2 border-blue-200 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-blue-600 mb-2">
              Event Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value as EventType)}
              className="w-full p-2 border-2 border-blue-200 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="reminder">Reminder</option>
              <option value="birthday">Birthday</option>
              <option value="meeting">Meeting</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};