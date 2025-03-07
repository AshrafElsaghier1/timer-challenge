import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

let timer;
const TimerChallenges = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const startChallengeHandler = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };
  const stopChallengeHandler = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      {timerExpired && <ResultModal targetTime={targetTime} result={"lost"} />}

      <section className="challenge">
        <h2> {title} </h2>
        <p className="challenge-time">
          {targetTime} sec{targetTime > 1 ? "s" : ""}
        </p>
        <button
          onClick={!timerStarted ? startChallengeHandler : stopChallengeHandler}
        >
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? " Timer is Running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenges;
