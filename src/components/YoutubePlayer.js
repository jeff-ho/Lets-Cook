import React from "react";

export default function YoutubePlayer({ foodVideo }) {
  const embeddedFoodVideo = foodVideo.replace("watch?v=", "embed/")
  return (
    <div className="custom-youtube-player">
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="390"
        src= {embeddedFoodVideo}
        frameBorder="0"
      ></iframe>
    </div>
  );
}

