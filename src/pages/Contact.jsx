import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4">Contact Us</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Have questions, feedback, or suggestions? We'd love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            rows="5"
            placeholder="Your message..."
            className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
