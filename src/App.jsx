import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Layout from './components/Layout/Layout';

import Login from './components/Login/Login'

import SignUp from './components/SignUp/SignUp'
const router = createBrowserRouter(
  createRoutesFromElements(

    <>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} /> 
      <Route path="details" element={<Details />} />
    </Route>,
    <Route path='/login' element={<Login/>}/>,
    <Route path='/signup' element={<SignUp/>}/>
   
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
