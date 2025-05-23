import React from "react";
import { FaLeaf, FaSun, FaTint, FaTemperatureHigh } from "react-icons/fa";

const PlantTipCard = () => {
  const tips = [
    {
      icon: <FaSun size={24} />,
      title: "Sunlight",
      description: "Place your plants near a window for indirect sunlight. Avoid harsh midday rays.",
    },
    {
      icon: <FaTint size={24} />,
      title: "Watering",
      description: "Water your plant when the top 1 inch of soil feels dry. Don’t overwater!",
    },
    {
      icon: <FaLeaf size={24} />,
      title: "Leaves",
      description: "Wipe dust off leaves weekly to help with photosynthesis.",
    },
    {
      icon: <FaTemperatureHigh size={24} />,
      title: "Temperature",
      description: "Keep your plants in a room between 18°C–25°C (65°F–77°F).",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 mt-20">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        🌞 Daily Plant Care Tips
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-green-100 border border-green-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="text-green-700">{tip.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{tip.title}</h3>
              <p className="text-sm text-gray-700">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantTipCard;
