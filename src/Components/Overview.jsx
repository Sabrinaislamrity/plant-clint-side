import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://plant-store-server.vercel.app/coffees')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.error("Failed to load plants:", err));
  }, []);

  const myItems = plants.filter(plant => plant.email === user?.email);

  return (
    <div className="p-6 md:p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-10">🌿 Dashboard Overview</h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Total Plants</h3>
          <p className="text-5xl font-bold text-green-900 dark:text-green-300">{plants.length}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-green-600 mb-2">My Plants</h3>
          <p className="text-5xl font-bold text-green-900 dark:text-green-300">{myItems.length}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Pending Reviews</h3>
          <p className="text-5xl font-bold text-green-900 dark:text-green-300">3</p>
        </div>
      </div>

      <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">👤 Logged-in User Info</h3>
        <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <p><strong>Name:</strong> {user?.displayName || "Not available"}</p>
          <p><strong>Email:</strong> {user?.email || "Not available"}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
