import React from 'react';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    const {_id,image, plantName,wateringFrequency,category} = coffee
   

    const handleDelete = (_id) =>{
 console.log(_id);
 
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
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
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
            
              <button className="btn btn-sm btn-outline btn-info">Update</button>
            
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