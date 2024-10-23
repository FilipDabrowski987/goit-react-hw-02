import Notification from "../Notification/Notification.jsx";

const positiveFeedback = ({ good, neutral, total }) => {
    return Math.round(((good + neutral) / total) * 100)
};

const Feedback = ({ feedback, total }) => {
    return (
      <div>
            {total === 0 ? (
                <Notification />
    ) : (<div>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positiveFeedback ({good: feedback.good, neutral: feedback.neutral, total})}%</p>
    </div>
    )}
    </div>
  );
};

export default Feedback;