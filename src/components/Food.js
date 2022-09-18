import React, { useState } from 'react'
import './Food.css'
import Modal from './Modal'

export default function Food({foodName, foodImage, foodYoutube, modal, handleModal}) {

  return (
    <section>
    {!modal && <img className="foodImage" src={foodImage} onClick={() => handleModal()} />}
    {!modal && <h3 className="foodName">{foodName}</h3>}
    {modal && <Modal handleModal={handleModal} foodVideo={foodYoutube} />}
    </section>
  )
}
