import React, { useEffect, useRef } from "react";

export default function App() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <video
        style={{ width: "100%" }}
        playsInline
        muted
        loop
        alt="All the devices"
        src="/video/promo.mp4"
        ref={videoEl}
      />
    </>
  );
}
