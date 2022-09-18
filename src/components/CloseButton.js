import React from 'react'
import './Button.css' 

export default function CloseButton({handleModal}) {
  return (
    <section className="button">
     <button onClick={() => handleModal()}>Close</button>
    </section>
  )
}