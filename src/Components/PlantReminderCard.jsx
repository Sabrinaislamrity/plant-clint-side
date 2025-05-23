import React from 'react';

const PlantReminderCardGrid = () => {
  return (
    <div className="bg-[#f0eae0] mt-24 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        🌱 Plant Care Tracker
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Peace Lily"
            className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-400"
          />
          <h2 className="text-xl font-semibold text-green-700 mb-2">Peace Lily</h2>
          <p className="text-gray-600">
            Next watering: <span className="font-semibold text-green-600">in 4 days</span>
          </p>
          <button
            className="mt-5 px-5 py-2 border-2 border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition"
          >
            Mark as Watered
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=400&q=80"
            alt="Spider Plant"
            className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-400"
          />
          <h2 className="text-xl font-semibold text-green-700 mb-2">Spider Plant</h2>
          <p className="text-gray-600">
            Next watering: <span className="font-semibold text-green-600">in 1 day</span>
          </p>
          <button
            className="mt-5 px-5 py-2 border-2 border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition"
          >
            Mark as Watered
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80"
            alt="Rubber Plant"
            className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-400"
          />
          <h2 className="text-xl font-semibold text-green-700 mb-2">Rubber Plant</h2>
          <p className="text-gray-600">
            Next watering: <span className="font-semibold text-green-600">in 6 days</span>
          </p>
          <button
            className="mt-5 px-5 py-2 border-2 border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition"
          >
            Mark as Watered
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"
            alt="Fiddle Leaf Fig"
            className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-400"
          />
          <h2 className="text-xl font-semibold text-green-700 mb-2">Fiddle Leaf Fig</h2>
          <p className="text-gray-600">
            Next watering: <span className="font-semibold text-green-600">in 3 days</span>
          </p>
          <button
            className="mt-5 px-5 py-2 border-2 border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition"
          >
            Mark as Watered
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantReminderCardGrid;
