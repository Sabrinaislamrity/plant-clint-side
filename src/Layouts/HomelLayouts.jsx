import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomelLayouts = () => {
    return (
       <>
       <div className=" max-w-7xl mx-auto">
        <Navber></Navber>
        
        <Outlet ></Outlet>
       </div>
       <Footer></Footer>
       </>
    );
};

export default HomelLayouts;