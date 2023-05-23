
import React from 'react';
import LogoTagline from './pages/home/components/logo-tagline-box/logo-tagline-box';
import Home from './pages/home/home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/mainn';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Sales from './pages/sales/sales';
import Payment from './pages/payment/payment';
import Dashboard from './pages/dashboard/dashboard';
import DataProtection from './pages/dataprotection/dataprotection';
import Disclaimer from './pages/disclaimer/disclaimer';
import AboutUs from './pages/aboutus/aboutus';
import Chat from './pages/chat/chat';

  
function App() {
  const user = localStorage.getItem("token");
  const plan = localStorage.getItem("plan");

  return (
    // <Home></Home>
    <Routes>
      {/* {user && <Route path="/payment" exact element={<Payment/>}/>} */}
      {/* {user && <Route path="/" exact element={<Main/>}/>} */}
      <Route path="/dataprotection" exact element={<DataProtection/>}/>
      <Route path="/aboutus" exact element={<AboutUs/>}/>
      <Route path="/disclaimer" exact element={<Disclaimer/>}/>
      {/* {user && <Route path="/chat" exact element={<Chat/>}/>} */}
      <Route path="/home" exact element={<Home/>}/>
      {user && <Route path="/signup" exact element={<Home/>}/>}
      {user && <Route path="/login" exact element={<Home/>}/>}
      {!user &&<Route path="/signup" exact element={<Signup/>}/>}
      {!user && <Route path="/login" exact element={<Login/>}/>}
      <Route path="/sales" exact element={<Sales/>}/>
      <Route path="/payment" exact element={<Payment/>}/>
      {user && plan && <Route path="/dashboard" exact element={<Dashboard/>}/>}
      {user && plan && <Route path="/chat" exact element={<Chat/>}/>}
      {user && !plan && <Route path="/chat" exact element={<Navigate replace to="/home"/>}/>}
      {!user && <Route path="/chat" exact element={<Navigate replace to="/home"/>}/>}
      {user && !plan && <Route path="/dashboard" exact element={<Navigate replace to="/home"/>}/>}
      {!user && <Route path="/dashboard" exact element={<Navigate replace to="/home"/>}/>}
      <Route path="/" exact element={<Navigate replace to="/home"/>}/>
    </Routes>
  );
}
  
export default App;