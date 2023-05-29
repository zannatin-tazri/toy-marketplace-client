
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
import AllToysDetails from '../Pages/All toys/AllToysDetails';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import MyToys from '../Pages/MyToys';
import PrivateRoute from './PrivateRoute';
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
          element: <PrivateRoute><AllToys></AllToys></PrivateRoute>
        },
        {
          path:'/dinosaur',
          element: <PrivateRoute><DinosaurDetails></DinosaurDetails></PrivateRoute>
        },
        {
          path:'/teddy',
          element:<PrivateRoute><TeddyDetails></TeddyDetails></PrivateRoute>
        },
        {
          path: '/horse',
          element: <PrivateRoute><HorseDetails></HorseDetails></PrivateRoute>
        },
        {
          path:'/allToysDetails',
          element: <PrivateRoute><AllToysDetails></AllToysDetails></PrivateRoute>
        },
        {
          path:"/*",
          element: <ErrorPage></ErrorPage>
        },
        {
          path:'mytoys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        }

      ]
    },
  ]);

export default router;