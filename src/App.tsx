import React, { useState } from 'react';
import { Calendar } from './components/Calendar';
import { HolidayList } from './components/HolidayList';
import { PersonalEvents } from './components/PersonalEvents';
import { Settings } from 'lucide-react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [theme, setTheme] = useState('default');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('lg');
  const [showHolidays, setShowHolidays] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const themes = [
    { id: 'default', name: 'Baby Blue' },
    { id: 'modern', name: 'Sunny Yellow' },
    { id: 'dark', name: 'Ocean Teal' },
    { id: 'nature', name: 'Sweet Pink' },
    { id: 'ocean', name: 'Sky Blue' },
  ];

  const sizes = [
    { id: 'sm', name: 'Small' },
    { id: 'md', name: 'Medium' },
    { id: 'lg', name: 'Large' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600">Baby Shark Calendar</h1>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-3 hover:bg-white rounded-full transition-colors text-blue-500 hover:text-blue-600"
          >
            <Settings className="w-7 h-7" />
          </button>
        </div>

        {showSettings && (
          <div className="mb-6 bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-200">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Customization</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Theme
                </label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full p-2 border-2 border-blue-200 rounded-full focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  {themes.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Size
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value as 'sm' | 'md' | 'lg')}
                  className="w-full p-2 border-2 border-blue-200 rounded-full focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  {sizes.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center h-full">
                  <input
                    type="checkbox"
                    checked={showHolidays}
                    onChange={(e) => setShowHolidays(e.target.checked)}
                    className="rounded-full text-yellow-400 border-2 border-blue-200 focus:ring-blue-200"
                  />
                  <span className="ml-2 text-sm font-medium text-blue-600">
                    Show Holidays
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex justify-center lg:justify-end">
            <Calendar
              currentDate={currentDate}
              onDateChange={setCurrentDate}
              theme={theme}
              size={size}
              showHolidays={showHolidays}
            />
          </div>
          <div className="flex justify-center">
            <PersonalEvents currentDate={currentDate} />
          </div>
          <div className="flex justify-center lg:justify-start">
            <HolidayList showHolidays={showHolidays} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;