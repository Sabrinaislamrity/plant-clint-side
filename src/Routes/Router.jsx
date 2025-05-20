import { createBrowserRouter } from "react-router";
import HomelLayouts from "../Layouts/HomelLayouts";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import UpDateCoffe from "../Components/UpDateCoffe";
import MyPlants from "../Components/MyPlants";

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
                Component: MyPlants
            },
            {
                path: 'addplant',
                Component: AddCoffee
            },
               {
                path: 'updateplant',
                Component: UpDateCoffe
            },
        ]
    },
       {
        path:"/auth",
        element:<h1>Authenticayion layout</h1>,
    },
       {
        path:"/news",
        element:<h1>news layout</h1>,
    },
       {
        path:"/*",
        element:<h1>error 404</h1>,
    },




]);

export default router;

