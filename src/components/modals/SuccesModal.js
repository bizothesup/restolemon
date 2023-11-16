import  Modal from 'react-modal'
import React from 'react'
import '../../App.css'
import logo  from '../../images/logo.svg'
export default function SuccesModal({ isOpen, closeModal }) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className="modal-content"
    >
    <img  src={logo} alt='little lemeon logo'/>
    <h2 className="success-heading">Booking Successful!</h2>
    <p>Your table has been successfully booked.</p>
    <p>We look forward to seeing you!</p>
    <button className="success-button" onClick={closeModal}>Close</button>
    </Modal>

  )
}
