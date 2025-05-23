import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomelLayouts = () => {
    return (
       <>
       <div className=" max-w-7xl mx-auto ">
        <Navber></Navber>
        
       {/* {import.meta.env.VITE_name} */}
       </div>
        <Outlet  ></Outlet>
       <Footer></Footer>
       </>
    );
};

export default HomelLayouts;