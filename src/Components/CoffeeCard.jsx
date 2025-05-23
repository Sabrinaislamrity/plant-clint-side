import React from 'react';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, image, plantName, wateringFrequency, category } = coffee;

  const handleDelete = (_id) => {
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
        fetch(`https://plant-store-server.vercel.app/coffees/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your plant has been deleted.", "success");
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = () => {
    // Replace this with window.location or modal logic if you aren't using React Router
    window.location.href = `/updateplant/${_id}`;
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto mb-4 px-2">
        <div className="flex flex-col md:flex-row bg-base-100 shadow-md rounded-2xl overflow-hidden border border-gray-200">
          <figure className="md:w-1/3 w-full h-48 md:h-auto">
            <img src={image} alt={plantName} className="object-cover w-full h-full" />
          </figure>
          <div className="card-body p-4 md:w-2/3 w-full">
            <h2 className="card-title text-lg md:text-xl font-semibold">{plantName}</h2>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Watering:</span> {wateringFrequency}
            </p>
            <div className="mt-4 flex flex-col sm:flex-row justify-end gap-2">
              <button
                className="btn btn-sm btn-outline btn-info"
                data-tooltip-id="tooltip"
                data-tooltip-content="Edit this plant"
                onClick={handleUpdate}
              >
                Update
              </button>

              <button
                className="btn btn-sm btn-outline btn-error"
                data-tooltip-id="tooltip"
                data-tooltip-content="Delete this plant"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <Tooltip id="tooltip" />
    </>
  );
};

export default CoffeeCard;
