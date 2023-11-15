import React from 'react'
import { fetchAPI } from '../api/bookingApi';
import BookingForm from './BookingForm';
import { useReducer } from "react";

export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }
  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  return (
    <>
     <BookingForm  availableTimes={availableTimes} dispatch={dispatch}/>
    </>
  )
}
