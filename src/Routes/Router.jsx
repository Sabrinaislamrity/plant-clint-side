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
                loader: ()=> fetch('http://localhost:3000/coffees'),
                hydrateFallbackElement: <Loading></Loading>,
                element: (
                   
                    <PrivateRoute>
                         <MyPlantss></MyPlantss>
                    </PrivateRoute>
                )
            },
            
             {
                path: 'allplants',
                loader: ()=> fetch('http://localhost:3000/coffees'),
                 hydrateFallbackElement: <Loading></Loading>,
                Component: AllPlants,
            },
             {
                path: 'coffee/:id',
                loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
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
                 loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
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




]);

export default router;

