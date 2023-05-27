
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Home/Login/Login';
import Register from '../Pages/Home/register/Register';
import Blog from '../Pages/Home/blog/Blog';
import AllToys from '../Pages/All toys/AllToys';
import DinosaurDetails from '../Pages/viewDetails/DinosaurDetails';
import TeddyDetails from '../Pages/viewDetails/teddyDetails';
import HorseDetails from '../Pages/viewDetails/horseDetails';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blogs',
          element: <Blog></Blog>
        },
        {
          path:'/alltoys',
          element: <AllToys></AllToys>
        },
        {
          path:'/dinosaur',
          element: <DinosaurDetails></DinosaurDetails>
        },
        {
          path:'/teddy',
          element:<TeddyDetails></TeddyDetails>
        },
        {
          path: '/horse',
          element: <HorseDetails></HorseDetails>
        }

      ]
    },
  ]);

export default router;