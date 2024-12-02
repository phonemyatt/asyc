export type EventType = 'birthday' | 'meeting' | 'reminder';

export interface Event {
  id: string;
  date: Date;
  title: string;
  type: EventType;
}

export const EventColors: Record<EventType, string> = {
  birthday: 'bg-pink-300',
  meeting: 'bg-yellow-400',
  reminder: 'bg-teal-400'
};