// import React from 'react';

const Feedback = ({ feedback, total }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    <p>Total: {total}</p>
    </div>
  );
};

export default Feedback;