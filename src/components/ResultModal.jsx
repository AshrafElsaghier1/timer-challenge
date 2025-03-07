import React from "react";

const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        The Target time was <strong>{targetTime} seconds. </strong>{" "}
      </p>
      <p>
        You Stopped The timer with <strong>X seconds left </strong>
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
