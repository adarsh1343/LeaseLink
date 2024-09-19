import React from 'react';

const Widgets = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Welcome to Our Website</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Widget 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Widget 1" 
              className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
            />
            <h2 className="text-xl font-semibold mb-2">Widget 1</h2>
            <p className="text-gray-600 mb-2">Subheading of Widget 1</p>
            <p className="text-gray-600">This is the description of the first widget.</p>
          </div>
          {/* Widget 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Widget 2" 
              className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
            />
            <h2 className="text-xl font-semibold mb-2">Widget 2</h2>
            <p className="text-gray-600 mb-2">Subheading of Widget 2</p>
            <p className="text-gray-600">This is the description of the second widget.</p>
          </div>
          {/* Widget 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Widget 3" 
              className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
            />
            <h2 className="text-xl font-semibold mb-2">Widget 3</h2>
            <p className="text-gray-600 mb-2">Subheading of Widget 3</p>
            <p className="text-gray-600">This is the description of the third widget.</p>
          </div>
          {/* Widget 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Widget 4" 
              className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
            />
            <h2 className="text-xl font-semibold mb-2">Widget 4</h2>
            <p className="text-gray-600 mb-2">Subheading of Widget 4</p>
            <p className="text-gray-600">This is the description of the fourth widget.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
