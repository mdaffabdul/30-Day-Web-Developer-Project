import { useState } from "react";
import Interactive from './components/Interactive';

export default function App () {
  const [darkMode, setDarkMode] = useState (false);

  return (
    <div className={`flex min-h-screen flex-col font-sans ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      <div>
        <div className="flex flex-row items-center justify-between p-8 gap-48">
          <p className="w-35"></p>
          <h1 className="font-bold text-2xl text-center">Counters</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full font-bold">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>

      <div className="grow flex items-center justify-center gap-6">
        <Interactive title="Jumlah Makan" />
        <Interactive title="Jumlah Minum" />
      </div>

    </div>

  )
}