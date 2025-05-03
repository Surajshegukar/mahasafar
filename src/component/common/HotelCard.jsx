import React from 'react';

const HotelCard = ({ hotel }) => {
    return (
        <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
            <img className="w-full h-48 object-cover" src={hotel.image} alt={hotel.name} />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-lg font-bold text-orange-600">{hotel.price} EUR / Night</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default HotelCard;