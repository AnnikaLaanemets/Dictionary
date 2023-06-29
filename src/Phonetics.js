import React from "react";
import useSound from "use-sound";
import "./Interpretation.css";

export default function Phonetics(props) {
  let pronunciation = props.data.phonetics[0].audio;

  const [play] = useSound(pronunciation);

  if (pronunciation) {
    return (
      <div className="phonetics">
        <button onClick={play}>🔊</button>
        <span className="text ms-4">{props.data.phonetics[0].text}</span>
      </div>
    );
  } else {
    return null;
  }
}
