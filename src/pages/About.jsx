import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
        About Plantasia
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Plantasia is your go-to platform for discovering, adding, and managing your favorite plants. We aim to help plant lovers nurture their green friends with care and knowledge.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Plant care"
          className="rounded-lg shadow-lg w-full md:w-1/2"
        />
        <div className="text-gray-700 dark:text-gray-300 space-y-4 md:w-1/2">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            We want to create a community where plant enthusiasts can connect and share their experiences. Whether you are a beginner or an expert, Plantasia is designed to make plant care easier and more enjoyable.
          </p>
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprehensive plant database</li>
            <li>Personalized plant tracking</li>
            <li>Community tips and advice</li>
            <li>Easy plant addition and management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
