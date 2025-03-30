import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenges = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef(null);

  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
  const startChallengeHandler = () => {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemaining) => prevRemaining - 10);
    }, 10);
  };
  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }
  const handleReset = () => {
    setRemainingTime(targetTime * 1000);
  };
  const closeDialog = (event) => {
    if (dialog.current && event.target === dialog.current) {
      dialog.current.close();
      handleReset();
    }
  };
  const stopChallengeHandler = () => {
    clearInterval(timer.current);
    dialog.current.showModal();
  };

  return (
    <>
      <ResultModal
        handleReset={handleReset}
        ref={dialog}
        targetTime={targetTime}
        result={"lost"}
        closeDialog={closeDialog}
        remainingTime={remainingTime}
      />

      <section className="challenge">
        <h2> {title} </h2>
        <p className="challenge-time">
          {targetTime} sec{targetTime > 1 ? "s" : ""}
        </p>
        <button
          onClick={
            !timerIsActive ? startChallengeHandler : stopChallengeHandler
          }
        >
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? " Timer is Running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenges;
