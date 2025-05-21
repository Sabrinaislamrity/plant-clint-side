import React from 'react';
import Swal from 'sweetalert2';

const AddCoffees = () => {
      const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);
         
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
           if (data.insertedId) {
            
            
            Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Plant added successfully",
      showConfirmButton: false,
      timer: 1500
    });
           }
            
        })
      };
    
    return (
        <>
      <div className="p-12 md:p-24">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold text-green-700">Add Plant</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Add a new plant to your collection. Please provide accurate and complete details so we can help you take better care of it.
          </p>
        </div>

        <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image URL */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input type="text" name="image" placeholder="https://..." className="input input-bordered w-full" />
          </fieldset>

          {/* Plant Name */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Plant Name</label>
            <input type="text" name="plantName" placeholder="e.g., Aloe Vera" className="input input-bordered w-full" />
          </fieldset>

          {/* Category */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select name="category" className="select select-bordered w-full">
              <option value="">Select Category</option>
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </fieldset>

          {/* Description */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100 md:col-span-2">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea name="description" placeholder="Write a short description..." className="textarea textarea-bordered w-full" rows="3"></textarea>
          </fieldset>

          {/* Care Level */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Care Level</label>
            <select name="careLevel" className="select select-bordered w-full">
              <option value="">Select Level</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </fieldset>

          {/* Watering Frequency */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Watering Frequency</label>
            <input type="text" name="wateringFrequency" placeholder="e.g., Every 3 days" className="input input-bordered w-full" />
          </fieldset>

          {/* Last Watered Date */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Last Watered Date</label>
            <input type="date" name="lastWatered" className="input input-bordered w-full" />
          </fieldset>

          {/* Next Watering Date */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Next Watering Date</label>
            <input type="date" name="nextWatering" className="input input-bordered w-full" />
          </fieldset>

          {/* Health Status */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">Health Status</label>
            <input type="text" name="healthStatus" placeholder="e.g., Healthy, Needs Attention" className="input input-bordered w-full" />
          </fieldset>

          {/* User Email */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">User Email</label>
            <input type="email" name="userEmail" placeholder="user@example.com" className="input input-bordered w-full" />
          </fieldset>

          {/* User Name */}
          <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">User Name</label>
            <input type="text" name="userName" placeholder="e.g., John Doe" className="input input-bordered w-full" />
          </fieldset>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-8">
            <input type="submit" className="btn btn-success px-10 text-white" value="Add Plant" />
          </div>
        </form>
      </div>
    </>
    );
};

export default AddCoffees;