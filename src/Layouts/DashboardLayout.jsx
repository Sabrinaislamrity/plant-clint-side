import React from 'react';
import { Link, Outlet } from 'react-router';
import { FiHome, FiPlusSquare, FiList, FiUser } from 'react-icons/fi';

const DashboardLayout = () => {
    return (
           <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-gray-800 p-6 shadow-2xl rounded-r-3xl">
        <h2 className="text-3xl font-bold text-green-600 mb-10 tracking-wide">🌿 Dashboard</h2>
        <nav className="space-y-6 text-lg">
          <Link to="/dashboard" className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-green-600 transition">
            <FiHome /> Overview
          </Link>
          <Link to="/allplants" className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-green-600 transition">
            <FiList /> All Items
          </Link>
          <Link to="/addplant" className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-green-600 transition">
            <FiPlusSquare /> Add Item
          </Link>
          <Link to="/myplants" className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-green-600 transition">
            <FiUser /> My Items
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto bg-gray-100 dark:bg-gray-900 rounded-l-3xl">
        <Outlet />
      </main>
    </div>
    );
};

export default DashboardLayout;