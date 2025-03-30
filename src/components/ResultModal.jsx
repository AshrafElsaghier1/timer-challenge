import React from "react";

const ResultModal = ({
  ref,
  targetTime,
  closeDialog,
  remainingTime,
  handleReset,
}) => {
  const userLost = remainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return (
    <dialog
      ref={ref}
      className="result-modal"
      onClose={closeDialog}
      onClick={closeDialog}
    >
      {/* <h2>You {userLost ? "Lost" : "Won"}</h2> */}
      {userLost && <h2> You Lost </h2>}
      {!userLost && <h2> Your Score Is {score} </h2>}
      <p>
        The Target time was <strong>{targetTime} seconds. </strong>
      </p>
      <p>
        You Stopped The timer with
        <strong> {(remainingTime / 1000).toFixed(2)} seconds left </strong>
      </p>
      <form method="dialog" onSubmit={handleReset}>
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
