import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../Components/CoffeeCard';

const MyPlants = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);
    
    
    return (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {
                coffees.map(coffee => <CoffeeCard
                   key={coffee._id}
                   coffee={coffee}
                   setCoffees = {setCoffees}
                   coffees={coffees}
                   ></CoffeeCard>)
            }
          </div>
        </div>
    );
};

export default MyPlants;