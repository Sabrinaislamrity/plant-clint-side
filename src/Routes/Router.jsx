import { createBrowserRouter } from "react-router";
import HomelLayouts from "../Layouts/HomelLayouts";
import Home from "../Components/Home";
// import AddCoffee from "../Components/AddCoffee";
// import UpDateCoffe from "../Components/UpDateCoffe";
// import MyPlants from "../Components/MyPlants";
import AllPlants from "../pages/AllPlants";
import AddCoffees from "../pages/AddCoffees";
import MyPlantss from "../pages/MyPlantss";
import ViewDetails from "../pages/ViewDetails";
import UpDateCoffe from "../pages/UpDateCoffe";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Authlayout from "../Layouts/Authlayout";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import Error from "../pages/Error";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";
import Overview from "../Components/Overview";


const router = createBrowserRouter([

    {
        path:"/",
        element:<HomelLayouts></HomelLayouts>,
        children: [
            {
                index: true,
                Component: Home,
                
            },
               {
                path: 'myplants',
                loader: ()=> fetch('https://plant-store-server.vercel.app/coffees'),
                hydrateFallbackElement: <Loading></Loading>,
                element: (
                   
                    <PrivateRoute>
                         <MyPlantss></MyPlantss>
                    </PrivateRoute>
                )
            },
            
            
             {
                path: 'allplants',
                loader: ()=> fetch('https://plant-store-server.vercel.app/coffees'),
                 hydrateFallbackElement: <Loading></Loading>,
                Component: AllPlants,
            },






             {
                path: 'aboutus',
               
                Component: About,
            },


             {
                path: 'contact',
               
                Component: Contact,
            },













             {
                path: 'coffee/:id',
                loader: ({params}) => fetch(`https://plant-store-server.vercel.app/coffees/${params.id}`),
                 hydrateFallbackElement: <Loading></Loading>,
               element: <PrivateRoute>
                <ViewDetails></ViewDetails>
               </PrivateRoute>
            },

            {
                path: 'addplant',
               element:
               <PrivateRoute>
                <AddCoffees></AddCoffees>
               </PrivateRoute>
            },
               {
                path: 'updateplant/:id',
                 loader: ({params}) => fetch(`https://plant-store-server.vercel.app/coffees/${params.id}`),
                  hydrateFallbackElement: <Loading></Loading>,
                Component: UpDateCoffe,
            },
        ]
    },
       {
        path:"/auth",
        element: <Authlayout></Authlayout>,
        children: [

            {
                path:"/auth/login",
                element:<Login></Login>,
            },
            {
                path:"/auth/register",
                element: <Register></Register>,
            },
        ]
    },
  
    
       {
        path:"/*",
        element:<Error></Error>
    },

      {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "allplants",
        element: <AllPlants />,
      },
      {
        path: "addplant",
        element:   <AddCoffees></AddCoffees>,
      },
      {
        path: "myplants",
        element:  <MyPlantss></MyPlantss>,
      },
    ],
  },




]);

export default router;

