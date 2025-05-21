import React from 'react';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {
  const {
    _id,
    image,
    plantName,
    wateringFrequency,
    category,
    lastWatered,
    nextWatering,
    healthStatus,
    userEmail,
    userName,
  } = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 h-80 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={plantName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-green-700">{plantName}</h1>
          <p className="text-gray-600 italic">
            A beautiful and resilient plant loved by its caregiver.
          </p>

          <p className="text-gray-700">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-gray-700">
            <strong>Watering Frequency:</strong> {wateringFrequency}
          </p>
          <p className="text-gray-700">
            <strong>Last Watered:</strong> {lastWatered}
          </p>
          <p className="text-gray-700">
            <strong>Next Watering Due:</strong> {nextWatering}
          </p>
          <p className="text-gray-700">
            <strong>Health Status:</strong>{' '}
            <span
              className={`font-semibold ${
                healthStatus === 'Healthy'
                  ? 'text-green-600'
                  : healthStatus === 'Needs Attention'
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}
            >
              {healthStatus}
            </span>
          </p>

          {/* Add some emotional narrative */}
          <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
            <p className="text-sm text-green-900">
              <strong>Care Note:</strong> This plant thrives with love and attention.
              Regular watering and indirect sunlight are key to its well-being. Keep
              an eye on its leaves—if they start to droop, it might be calling for a
              little extra care.
            </p>
          </div>

          <hr />

          {/* Owner Info */}
          <h2 className="text-xl font-semibold mt-4 text-gray-800">Caregiver Information</h2>
          <p className="text-gray-700">
            <strong>Name:</strong> {userName}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {userEmail}
          </p>
        </div>
      </div>

      {/* Footer Message */}
      <div className="mt-10 text-center text-sm text-gray-500 italic">
        Plants are not just decorations—they are living companions. Let this one flourish with kindness and consistency.
      </div>
    </div>
  );
};

export default ViewDetails;
