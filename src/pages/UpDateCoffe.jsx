import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpDateCoffe = () => {
     const {
    _id,
    image,
    plantName,
    wateringFrequency,
    category,
    lastWatered,
    nextWatering,
    healthStatus,
    careLevel,
    description,
    userEmail,
    userName,
  } = useLoaderData();
    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries())
        fetch(`https://plant-store-server.vercel.app/coffees/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            if (data.modifiedCount) {
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
            }
        })
    }
    return (
      <>
        <div className="p-12 md:p-24">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold text-green-700">Update Plant</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Update a new plant to your collection. Please provide accurate and complete details so we can help you take better care of it.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image URL */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input type="text" name="image" defaultValue={image} placeholder="https://..." className="input input-bordered w-full" />
          </fieldset>

          {/* Plant Name */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Plant Name</label>
            <input type="text" name="plantName" defaultValue={plantName}  placeholder="e.g., Aloe Vera" className="input input-bordered w-full" />
          </fieldset>

          {/* Category */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select name="category" defaultValue={category}  className="select select-bordered w-full">
              <option value="">Select Category</option>
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </fieldset>

          {/* Description */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100 md:col-span-2">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea name="description" defaultValue={description}  placeholder="Write a short description..." className="textarea textarea-bordered w-full" rows="3"></textarea>
          </fieldset>

          {/* Care Level */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Care Level</label>
            <select name="careLevel" defaultValue={careLevel}  className="select select-bordered w-full">
              <option value="">Select Level</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </fieldset>

          {/* Watering Frequency */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Watering Frequency</label>
            <input type="text" name="wateringFrequency" defaultValue={wateringFrequency} placeholder="e.g., Every 3 days" className="input input-bordered w-full" />
          </fieldset>

          {/* Last Watered Date */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Last Watered Date</label>
            <input type="date" name="lastWatered" defaultValue={lastWatered} className="input input-bordered w-full" />
          </fieldset>

          {/* Next Watering Date */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Next Watering Date</label>
            <input type="date" name="nextWatering" defaultValue={nextWatering} className="input input-bordered w-full" />
          </fieldset>

          {/* Health Status */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Health Status</label>
            <input type="text" name="healthStatus" defaultValue={healthStatus} placeholder="e.g., Healthy, Needs Attention" className="input input-bordered w-full" />
          </fieldset>

          {/* User Email */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">User Email</label>
            <input type="email" name="userEmail" defaultValue={userEmail}  placeholder="user@example.com" className="input input-bordered w-full" />
          </fieldset>

          {/* User Name */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">User Name</label>
            <input type="text" name="userName" defaultValue={userName}  placeholder="e.g., John Doe" className="input input-bordered w-full" />
          </fieldset>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-8">
            <input type="submit" className="btn btn-success px-10 text-white" value="Update Plant" />
          </div>
        </form>
      </div>
      </>
    );
};

export default UpDateCoffe;