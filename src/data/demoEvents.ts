import { Event } from '../types/events';

export const demoEvents: Event[] = [
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