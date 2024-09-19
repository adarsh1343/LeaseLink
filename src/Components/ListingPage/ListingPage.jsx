import React from 'react';
import ListingCard from './ListingCard';
import ScrollView from '../ScrollView/ScrollView';

const ListingPage = () => {
  const listing = {
    image: 'https://via.placeholder.com/600x400',
    title: 'Beautiful House',
    description: 'This is a beautiful house located in a serene environment with modern amenities.'
  };

  const scrollItems = [
    { image: 'https://via.placeholder.com/150', title: 'Item 1' },
    { image: 'https://via.placeholder.com/150', title: 'Item 2' },
    { image: 'https://via.placeholder.com/150', title: 'Item 3' },
    { image: 'https://via.placeholder.com/150', title: 'Item 4' },
    { image: 'https://via.placeholder.com/150', title: 'Item 5' },
    { image: 'https://via.placeholder.com/150', title: 'Item 6' },
    { image: 'https://via.placeholder.com/150', title: 'Item 7' },
    { image: 'https://via.placeholder.com/150', title: 'Item 8' },
  ];

  return (
    <div>
      {/* Content area */}
      <div className="container mx-auto p-8 flex">
        {/* Left Side: Listing Card (50% width) */}
        <div className="w-1/2">
          <ListingCard image={listing.image} title={listing.title} />
        </div>

        {/* Right Side: Information (50% width) */}
        <div className="w-1/2 pl-8">
          <h1 className="text-4xl font-bold mb-4">{listing.title}</h1>
          <p className="text-gray-600">{listing.description}</p>
        </div>
      </div>

      {/* ScrollView Component */}
      <div className="mt-16">
        <ScrollView items={scrollItems} />
      </div>
    </div>
  );
};

export default ListingPage;
