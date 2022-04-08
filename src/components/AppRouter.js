import React, { useContext, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../context/Context";
import Explore from "../pages/public/Explore"
import { HOME_ROUTE } from "../utils/Consts";
import { authRoutes, publicRoutes } from "../utils/Routes";
import Shop from '../pages/public/Shop'
import axios from 'axios'
import Navbar from '../components/nav/Navbar' 
import Basket from "../pages/public/admin/Basket";

const fetchData = () => {
  return axios
    .get(`http://localhost:3004/items`)
    .then((response) => response.data);
};



const AppRouter = (id) => {
 const { dispatch, user } = useContext(Context);



  return (
    <div className="AppRouter">
      <Navbar/>
      
      <Routes>
        {(user &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} exact />
          ))) ||
          publicRoutes.map(({ path, element = { element } }) => (
            <Route key={path} path={path} element={element} exact />
          ))}
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/:id" element={<Explore />} />
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/basket/:id" element={<Explore/>}/>
        <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
      </Routes>
       
    </div>
  );
};

export default AppRouter;
