import React from 'react';
import { Link } from 'react-router';
// import { data } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id,image, plantName,wateringFrequency,category} = coffee
   console.log('aita image',image);
   

    const handleDelete = (_id) =>{
 
 
 Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    
    
  if (result.isConfirmed) {

    fetch(`http://localhost:3000/coffees/${_id}`,{
        method: 'DELETE'
    })
    .then(res =>res.json())
    .then(data => {
        if (data.deletedCount) {
             Swal.fire({
      title: "Deleted!",
      text: "Your Plant has been deleted.",
      icon: "success"
    });

    const remainingCoffees = coffees.filter(cof => cof._id !== _id);
    setCoffees(remainingCoffees);




        }
    })



   
  }
});
    }
    
    return (
     <>
       <div className="max-w-md mx-auto mb-4">
      <div className="card card-side bg-base-100 shadow-md rounded-2xl overflow-hidden border border-gray-200">
        <figure className="w-1/3">
          <img src={image} alt={plantName} className="object-cover h-full w-full" />
        </figure>
        <div className="card-body p-4 w-2/3">
          <h2 className="card-title text-xl font-semibold">{plantName}</h2>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Watering:</span> {wateringFrequency}
          </p>
          <div className="mt-4 flex justify-end gap-2">

            <Link to={`/updateplant/${_id}`}>
             <button className="btn btn-sm btn-outline btn-info">Update</button>
            </Link>
            
              
            
            <button onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-outline btn-error"
              
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
     </>
    );
};

export default CoffeeCard;