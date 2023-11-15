import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

export default function BookingForm(props) {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [telephone,setTelephone] = useState('')
  const [guest,setGuest] = useState('')
  const [date,setDate] = useState('')
  const [occasion, setOccasion] = useState('')
  const [comment,setComment] = useState('')

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

function handleDateChange(e){
  setDate(e.target.value);
  var stringify = e.target.value;
  const date = new Date(stringify);
  props.updateTimes(date);
  setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
}

// const clearForm = () => {
//   setFirstName("");
//   setLastName("");
//   setEmail("");
//   setTelephone("");
//   setGuest("");
//   setOccasion("");
//   setDate("");
//   setComment("");
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   alert("Reservation success!");
//   clearForm();
// };

  return (
    <>
      <div className="form">
      <form className='form-body'>
        <fieldset>
      <div>
           <label  htmlFor='firstName'>
             First name <sup>*</sup>
           </label>
           <input
             id='firstName'
             minLength={2}
             maxLength={50}
             value={firstName}
             onChange={(e) => {
               setFirstName(e.target.value);
             }}
             placeholder="First name"
           />
         </div>
         <div>
           <label htmlFor='lastName'>Last name</label>
           <input
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
         <div>
           <label  htmlFor='email'>
             Email address <sup>*</sup>
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
         <div>
           <label  htmlFor='telephone'>
            Phone number <sup>*</sup>
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
         <div>
           <label  htmlFor='guest'>
            Guest <sup>*</sup>
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
         <div>
           <label htmlFor='date'>
             Date <sup>*</sup>
           </label>
           <input
           id='date'
            type='date'
            required
             value={date}
             onChange={{handleDateChange}}
             placeholder="Date"
           />
         </div>
         <div>
          <label htmlFor='time'>Time</label>
          <select id='time' required>
             {finalTime}
          </select>
         </div>
         <div>
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
        <div>
          <label htmlFor='comment'>Comment</label>
          <textarea id='comment'
          value={comment}
          rows={8}
          cols={50}
          onChange={(e) => setComment(e.target.value)}>
          </textarea>
        </div>
        <Link className='book-button' to='/confirmation'>
            Book table
      </Link>
        </fieldset>
   

      </form>
      </div>
    </>
  )
}
