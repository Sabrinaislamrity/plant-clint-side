import React from 'react';
import { useLoaderData } from 'react-router';
import SobPlants from '../Components/SobPlants';
// import NewPlants from '../Components/NewPlants';

const AllPlants = () => {
     const coffees = useLoaderData();
    //  console.log(coffees);
    // const plants =useLoaderData()
    // console.log(plants);
    
     
    return (
        <div>
              <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {
                coffees.map(coffee =>
                   <SobPlants key={coffee._id} coffee={coffee}></SobPlants>
                  // <NewPlants  key={plants._id} coffee={plants}></NewPlants>
                )
            }
          </div>
        </div>
            
        </div>
    );
};

export default AllPlants;