import React from 'react'
import './Header.css'

export default function Header({name, image}) {
  return (
    <section className="header">
      <h1>Jeff's Random Meal Generator</h1>
      {!name && !image && <h3>Click the button and see what we're having for dinner today!</h3>}
    </section>
  )
}
