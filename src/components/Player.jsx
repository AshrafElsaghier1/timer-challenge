import { useEffect, useRef, useState } from "react";
export default function Player() {
  const playerName = useRef(null);
  const [playerNameValue, setPlayerNameValue] = useState(null);
  const submitHandler = () => {
    setPlayerNameValue(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {playerNameValue ? playerNameValue : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={submitHandler}>Set Name</button>
      </p>
    </section>
  );
}
