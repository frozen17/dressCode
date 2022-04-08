import Admin from "../pages/public/admin/Admin"
import Basket from "../pages/public/admin/Basket"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/login/Register"
import Items from "../pages/public/Items"
import Show from '../pages/public/Show'
import Shop from '../pages/public/Shop'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ITEMS_ROUTE,
  SHOP_ROUTE,
  SHOW_ROUTE,
  THANK_ROUTE,
  PROFILE_ROUTE,
  LIKED_ROUTE,
  ENJOY_ROUTE
} from "./Consts";
import Explore from "../pages/public/Explore"
import Thank from "../pages/login/Thank"
import Profile from "../pages/public/admin/Profile"
import Liked from "../pages/public/like/liked/Liked"
import Enjoy from "../components/enjoyByvideo/Enjoy"
import Loved from "../pages/public/like/Loved"







export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    },
    {
        path: PROFILE_ROUTE,
        element: <Profile/>
    },
    {
        path: LIKED_ROUTE,
        element: <Loved/>
    },
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: ITEMS_ROUTE,
        element: <Items/>
    },
    {
        path: SHOW_ROUTE,
        element: <Show/>
    },
    {
        path: THANK_ROUTE,
        element: <Thank/>
    },
    {
        path: ENJOY_ROUTE,
        element: <Enjoy/>
    }
]


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: SHOP_ROUTE,
        element: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Login/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Register/>
    },
    {
        path: ITEMS_ROUTE,
        element: <Items/>
    },
    {
        path: SHOW_ROUTE,
        element: <Show/>
    },
    {
        path: ENJOY_ROUTE,
        element: <Enjoy/>
    }
] 