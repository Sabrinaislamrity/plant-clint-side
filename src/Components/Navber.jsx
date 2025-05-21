import React, { useEffect, useState } from 'react';
import Logo from '../assets/plan_logo.PNG';

const Navber = () => {
     const [loading, setLoading] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setActivePath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setActivePath(path);
      window.location.href = path; 
    }, 700);
  };

  const linkClass = (path) =>
    `m-4 text-sm font-medium hover:text-green-600 ${
      activePath === path ? 'text-green-600 border-b-2 border-green-600' : ''
    }`;

  const links = (
    <>
      <a
        href="/"
        className={linkClass('/')}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/');
        }}
      >
        Home
      </a>
      <a
        href="/allplants"
        className={linkClass('/allplants')}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/allplants');
        }}
      >
      All Plants
      </a>
      <a
        href="/addplant"
        className={linkClass('/addplant')}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/addplant');
        }}
      >
Add Plant
      </a>
      <a
        href="/myplants"
        className={linkClass('/myplants')}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/myplants');
        }}
      >
        My Plants 
      </a>
    </>
  );
    return (
       <>
         <div className="navbar  relative z-20 " >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Law.BD Logo" className="w-30 h-10" />
          <span className="text-xl font-bold text-green-800">Plantasia</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4 flex">
        <button className="relative group overflow-hidden px-6 py-2 border-2 border-green-800 bg-white text-green-800 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
  <span className="absolute left-0 top-0 h-full w-0 bg-green-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
  <span className="relative z-10 transition duration-300 group-hover:text-white">login</span>
</button>
<button className="relative group overflow-hidden px-6 py-2 border-2 border-green-600 bg-white text-green-800 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
  <span className="absolute left-0 top-0 h-full w-0 bg-green-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
  <span className="relative z-10 transition duration-300 group-hover:text-white">Register</span>
</button>
      </div>

      {loading && (
  <div className="fixed inset-0 bg-white opacity-50 flex justify-center items-center z-50">
    <span className="loading loading-bars loading-xl"></span>
  </div>
)}

    </div>
       </>
    );
};

export default Navber;