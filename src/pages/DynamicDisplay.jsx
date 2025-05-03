import { useState } from 'react';

export default function DynamicDisplay({data}) {
  // Mock data structure based on your provided format


  const [activeTab, setActiveTab] = useState('attractions');

  return (
    <div className="w-full p-4 bg-gray-50 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-orange-800">Itinerary Data</h2>
      
      <div className="mb-4 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <button 
              onClick={() => setActiveTab('attractions')}
              className={`inline-block p-4 ${
                activeTab === 'attractions' 
                  ? 'text-orange-600 border-b-2 border-blue-600 rounded-t-lg' 
                  : 'text-gray-500 hover:text-gray-600 hover:border-gray-300'
              }`}
            >
              Attractions
            </button>
          </li>
          <li className="mr-2">
            <button 
              onClick={() => setActiveTab('places')}
              className={`inline-block p-4 ${
                activeTab === 'places' 
                  ? 'text-orange-600 border-b-2 border-blue-600 rounded-t-lg' 
                  : 'text-gray-500 hover:text-gray-600 hover:border-gray-300'
              }`}
            >
              Places
            </button>
          </li>
        </ul>
      </div>
      
      <div className="mt-6">
        {activeTab === 'attractions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data[0].attractions.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <span className="bg-blue-100 text-orange-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                      ★ {item.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <button className="mt-3 text-sm text-orange-600 hover:text-orange-800">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'places' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data[1].places.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                      ★ {item.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <button className="mt-3 text-sm text-green-600 hover:text-green-800">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}