import React, { useState } from 'react';
import { cn } from '../lib/utils';

const Tabs = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=' h-full '>
      <ul className="flex border-b border-gray-200">
      {tabs.map((tab, index) => (
      
          <li key={index}  className=" -mx-px flex-grow flex-1">
            <button
              className={cn(" w-full hover:bg-primary/25 font-bold hover:text-primary text-gray-500  px-6 py-3 border-b-[2px] border-transparent ",{ "bg-primary/25 text-primary border-primary": activeTab === index })}
              onClick={() => setActiveTab(index)}
              >
              {tab}
            </button>
          </li>
      ))}
          
      </ul>
      <div className=" py-8">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
