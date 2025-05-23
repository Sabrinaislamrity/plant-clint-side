import React from 'react';
import { Link } from 'react-router';

const NewPlants = ({plant}) => {
      const {_id,image, plantName,wateringFrequency,category} = plant
    return (
        <div>
             <div className="p-4 flex justify-center">
                
      <div className="w-80 h-[400px] bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        <div className="h-44 w-full overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={plantName}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col justify-between h-[calc(100%-176px)]">
          <div>
            <h2 className="text-xl font-bold text-green-800">{plantName}</h2>
            <p className="text-sm text-gray-600 mt-1">{category}</p>
            <p className="text-sm text-gray-500 mt-2 mb-4">💧 Watering: {wateringFrequency}</p>
          </div>
    <Link to={`/coffee/${_id}`}>
          <button className="mt-auto cursor-pointer text-sm font-semibold bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full shadow hover:from-green-500 hover:to-green-700 transition">
            View Details
          </button>
    </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NewPlants;