import React from 'react';
import { useLoaderData } from 'react-router';
import SobPlants from '../Components/SobPlants';

const AllPlants = () => {
     const coffees = useLoaderData();
     console.log(coffees);
     
    return (
        <div>
              <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {
                coffees.map(coffee => <SobPlants key={coffee._id} coffee={coffee}></SobPlants>)
            }
          </div>
        </div>
            
        </div>
    );
};

export default AllPlants;