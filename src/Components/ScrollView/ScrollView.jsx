import React from 'react';

const ScrollView = ({ items }) => {
  return (
    <div className="w-3/4 h-80 mx-auto mt-8 overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-h-[100px] p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollView;
