import React from 'react'
import OnlineOrder from './OnlineOrder';
import Login from './Login';
import Menu from './Menu';
import { Routes, Route } from 'react-router';
import Homepage   from './pages/Homepage'
import About from './About';
import BookingPage from './bookingpage/BookingPage';

export default function Routing() {
  return (
    <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/about' element={<About />} />
    <Route path='/menu' element={<Menu />} />
    <Route path='/booking' element={<BookingPage />} />
    <Route path='/order-online' element={<OnlineOrder />} />
    <Route path='/login' element={<Login />} />
</Routes>
  )
}
