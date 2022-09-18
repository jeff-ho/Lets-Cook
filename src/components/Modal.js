import React from 'react'
import YoutubePlayer from './YoutubePlayer'
import CloseButton from './CloseButton'
import './Modal.css'

export default function Modal({foodVideo, handleModal}) {
  return (
    <div className="overlay">
      <div className="modalContainer">
        <YoutubePlayer  foodVideo={foodVideo}/>
        <CloseButton handleModal={handleModal} message="Close"/>
      </div>
    </div>
  )
}
