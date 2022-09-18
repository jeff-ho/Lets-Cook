import React from 'react'
import './Button.css' 

export default function Button({handleFood, message}) {
  return (
    <section className="button">
     <button onClick={() => handleFood()}>{message}</button>
    </section>
  )
}
