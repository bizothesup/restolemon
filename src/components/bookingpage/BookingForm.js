import React, { useState } from 'react'
import '../../App.css'
import SuccesModal from '../modals/SuccesModal'

export default function BookingForm({availableTimes,updateTimes}) {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [telephone,setTelephone] = useState('')
  const [guest,setGuest] = useState('')
  const [date,setDate] = useState('')
  const [occasion, setOccasion] = useState('')
  const [comment,setComment] = useState('')

  const [finalTime, setFinalTime] = useState(
    availableTimes.map((times) => <option>{times}</option>)
  );

function handleDateChange(e){
  setDate(e.target.value);
  const stringify = e.target.value;
  const date = new Date(stringify);
  updateTimes(date);
  setFinalTime(availableTimes.map((times) => <option>{times}</option>));


 
}

const clearForm = () => {
  setFirstName("");
  setLastName("");
  setEmail("");
  setTelephone("");
  setGuest("");
  setOccasion("");
  setDate("");
  setComment("");
};

const handleBooking = (e) => {
  e.preventDefault();
  setIsModalOpen(true);
  clearForm();
};

const [isModalOpen, setIsModalOpen] = useState(false);
const closeModal = () => {
  setIsModalOpen(false);
}
  return (
    <>
    <div className="form-container">
      <form onSubmit={handleBooking}>
        <fieldset className="booking-container">
        <div className="form-row">
           <label  htmlFor='firstName'>
             First name *
           </label>
           <input
           id='firstName'
             required
             min={2}
             max={50}
             value={firstName}
             onChange={(e) => {
               setFirstName(e.target.value);
             }}
             placeholder="First name"
           />
         </div>
         <div className="form-row">
           <label htmlFor='lastName'>Last name</label>
           <input
           required
             id='lastName'
             minLength={2}
             maxLength={50}
             value={lastName}
             onChange={(e) => {
               setLastName(e.target.value);
             }}
             placeholder="Last name"
           />
         </div>
         <div className="form-row">
           <label  htmlFor='email'>
             Email address *
           </label>
           <input
            id='email'
            required
          minLength={4}
          maxLength={200}
            type='email'
             value={email}
             onChange={(e) => {
               setEmail(e.target.value);
             }}
             placeholder="Email address"
           />
         </div>
         <div className="form-row">
           <label  htmlFor='telephone'>
            Phone number *
           </label>
           <input
           id='telephone'
           required
           minLength={10}
           maxLength={25}
           type='tel'
             value={telephone}
             onChange={(e) => {
               setTelephone(e.target.value);
             }}
             placeholder="Phone number"
           />
         </div>
         <div className="form-row">
           <label  htmlFor='guest'>
            Guest *
           </label>
           <input
           id='guest'
           required
           min={1}
           max={100}
           type='number'
             value={guest}
             onChange={(e) => {
               setGuest(e.target.value);
             }}
             placeholder="Guest"
           />
         </div>
         <div className="form-row">
           <label htmlFor='date'>
             Date *
           </label>
           <input
           id='date'
            type='date'
            required
             value={date}
             onChange={handleDateChange}
             placeholder="Date"
           />
         </div>
         <div className="form-row">
          <label htmlFor='time'>Time *</label>
          <select id='time' required>
             {finalTime}
          </select>
         </div>
         <div className="form-row">
          <label htmlFor='occasion'>Occasion</label>
          <select id='occasion'
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          >
            <option>None</option>
            <option>Anniversary</option>
            <option>BirthDay</option>
            <option>Diner</option>
            <option>Other</option>
          </select>
         </div>
         <div className="form-row">
          <label htmlFor='comment'>Comment</label>
          <textarea id='comment'
          value={comment}
          rows={8}
          cols={50}
          onChange={(e) => setComment(e.target.value)}>
          </textarea>
        </div>
        <button className='button' type='submit'>Book Table</button>

      <SuccesModal isOpen={isModalOpen} closeModal={closeModal} />
        </fieldset>
        </form>
      </div>
    </>
  )
}
