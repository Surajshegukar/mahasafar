import React from 'react';
import Masonry from 'react-masonry-css';
import { destinationCategories as categories } from '../../api/data';
 
export default function Destination() {
  // Breakpoints for the masonry grid
  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };



  return (
    <div className="bg-gray-800 min-h-screen p-4 md:p-8 text-white" id='destinations'>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">MAJESTIC MAHARASHTRA</h1>
          <div className="h-0.5 w-48 bg-white mb-4"></div>
          <p className="w-full">
            Would you like to hike to historic forts, engage in thrilling aquatic sports, wander through
            dense forests or relax at pristine beaches? Explore the majestic state of Maharashtra while
            you stay with us.
          </p>
        </div>

        {/* Masonry Layout */}
         {/* <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-full -ml-4" // Negative margin to offset the gap
          columnClassName="pl-4" // Padding left for gap between columns
        >
          {categories.map((category) => (

            <div 
              key={category.id} 
              className={`mb-4 relative overflow-hidden rounded-lg ${category.height}`}
              onClick={()=>window.location.href =`destinations/${category.name.toLowerCase()}`}
            >
              {console.log(category.images)}
              <img 
                src={category.images}
                alt={`${category.name} in Maharashtra`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black-200 bg-opacity-40 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-2">
                  {category.icon}
                </div>
                <p className="text-xl font-bold">- {category.name} -</p>
              </div>
            </div>
          ))}
        </Masonry> */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full h-full justify-center">
  {categories.map((category) => (
    <div
      key={category.id}
      className={`relative overflow-hidden rounded-lg h-[200px] cursor-pointer`}
      onClick={() => window.location.href = `destinations/${category.name.toLowerCase().replace(' ','_')}`}
    >
      
      <img 
        src={category.images}
        alt={`${category.name} in Maharashtra`} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black-200 bg-opacity-40 flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-2">
          {category.icon}
        </div>
        <p className="text-md font-bold text-white">- {category.name} -</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}