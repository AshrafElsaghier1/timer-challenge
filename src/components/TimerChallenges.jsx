import React from "react";

const TimerChallenges = ({ title = "test", targetTime = 21 }) => {
  return (
    <section className="challenge">
      <h2> {title} </h2>
      <p className="challenge-time">
        {targetTime} sec{targetTime > 1 ? "s" : ""}
      </p>
      <button> Stop Challenge</button>
      <p> Timer is Running... / Timer Inactive</p>
    </section>
  );
};

export default TimerChallenges;
