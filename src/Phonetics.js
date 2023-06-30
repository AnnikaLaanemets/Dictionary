import React from "react";
import useSound from "use-sound";

export default function Phonetics(props) {
  let phonetic = props.phonetics;
  let pronunciation = phonetic.audio;

  const [play] = useSound(pronunciation);

  if (pronunciation) {
    return (
      <div className="phonetics">
        <button onClick={play}>🔊</button>
        <span className="text ms-4">{phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
