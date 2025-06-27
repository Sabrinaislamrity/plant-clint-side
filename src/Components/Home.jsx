import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import PlantReminderCard from './PlantReminderCard';
import PlantCareProgress from './PlantCareProgress';
import PlantTipCard from './PlantTipCard';
import NewPlants from './NewPlants';

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://plant-store-server.vercel.app/coffees')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.error("Failed to load plants:", err));
  }, []);

  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title outside the grid */}
        <h2 className="text-4xl font-extrabold text-green-800 text-center mt-12 mb-8 drop-shadow-sm">
          All PLANTS
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14'>
          {plants.map(plant => (
            <NewPlants key={plant._id} plant={plant} />
          ))}
        </div>

        {/* Other home cards */}
        <PlantReminderCard />
        <PlantCareProgress />
        <PlantTipCard />
      </div>
    </div>
  );
};

export default Home;
