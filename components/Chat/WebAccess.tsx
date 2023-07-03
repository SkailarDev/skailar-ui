import { useState } from 'react';

export const WebAccess = ({ id = "checkbox" }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const bgClass = isChecked ? 'bg-green-500' : 'bg-gray-600';
  const transformClass = isChecked ? 'translate-x-6' : '';

  return (
    <div className="flex items-center justify-center w-full py-2">
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id={id} className="sr-only" checked={isChecked} onChange={toggleCheck} aria-label="Web Access"/>
          <div className={`block w-14 h-8 rounded-full ${bgClass}`}></div>
          <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${transformClass}`}></div>
        </div>
        <div className="ml-3 text-gray-700 dark:text-white font-medium">
          Web Access
        </div>
      </label>
    </div>
  );
};