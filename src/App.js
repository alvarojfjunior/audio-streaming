import React from "react";

const MeetRoom = () => {
  const meetLink = "https://meet.jit.si/LuckyShoesAskDangerously";
  return (
    <iframe
      style={{ height: '99vh', margin: 0, padding: 0 }}
      src={meetLink}
      width="100%"
      frameborder="0"
      allow="microphone; camera; fullscreen"
      allowfullscreen
    ></iframe>
  );
};

export default MeetRoom;
