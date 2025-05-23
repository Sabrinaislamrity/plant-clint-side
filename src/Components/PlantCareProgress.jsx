import React from "react";
import Farme from "../assets/Frame.png";
import WateringAnimation from "./WateringAnimation";

const PlantCareProgress = () => {
  return (
    <div className="bg-[#f0eae0] mt-28 flex flex-col items-center justify-start">
      <h2 className="text-4xl font-extrabold text-green-800 mb-10 drop-shadow-sm">
        🌿 Plant Care Progress Tracker
      </h2>

      <ul className="steps w-full max-w-3xl mb-10">
        <li className="step text-green-700 font-semibold step-primary">Register</li>
        <li className="step  text-green-700 font-semibold  step-primary">Choose Plan</li>
        <li className="step text-green-700 font-semibold ">Purchase</li>
        <li className="step text-green-700 font-semibold ">Receive Product</li>
      </ul>

      <figure
        className="diff aspect-[16/9] w-full max-w-4xl rounded-xl shadow-lg"
        tabIndex={0}
        aria-label="Healthy vs Unhealthy Plant Comparison"
      >
        <div className="diff-item-1" role="img" tabIndex={0}>
          <img alt="Healthy Plant" src={Farme} className="rounded-xl" />
        </div>
        <div className="diff-item-2" role="img">
          <img
            alt="Unhealthy Plant (Blurred)"
            src={Farme}
            className="rounded-xl filter blur-sm"
          />
        </div>
        <div className="diff-resizer"></div>
      </figure>
      <p className="text-green-700 text-lg leading-relaxed mt-6 font-semibold">
  Welcome to the Plant Care Tracker — your smart companion for growing healthier, happier plants. Whether you're a beginner or a seasoned plant lover, our app helps you stay on track with timely watering reminders, progress tracking, and personalized care cards. Monitor each plant’s health, follow your purchase journey, and enjoy a smooth care routine from registration to receiving your kit. Our mission is to promote sustainable, eco-friendly living while building a vibrant community of plant enthusiasts who care deeply about nature. Let’s grow together! 🌿
</p>
  {/* Now show a Lottie animation below slider */}
      <h3 className="text-green-700 text-lg leading-relaxed mt-6 font-semibold">Visit Our Page</h3>
      <WateringAnimation />
    </div>

    
  );
};

export default PlantCareProgress;
