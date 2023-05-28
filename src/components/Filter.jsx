import React from 'react';

const Filter = ({ icon, title }) => {
  return (
    <div
      className="text-gray-500 font-thin mt-6 p-2 flex flex-col justify-center items-center gap-2
    hover:border-b-2 hover:border-gray-400 hover:text-gray-900 active:border-b-2 active:border-black active:text-black"
    >
      <div>{icon}</div>
      <div className="">{title}</div>
    </div>
  );
};

export default Filter;
