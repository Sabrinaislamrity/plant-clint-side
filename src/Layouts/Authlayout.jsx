import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';

const Authlayout = () => {
    return (
      <>
       <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <Navber></Navber>
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
      </>
    );
};

export default Authlayout;