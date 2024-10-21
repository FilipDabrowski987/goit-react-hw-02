import { useState } from 'react';
import './App.css'
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  
  const updateFeedback = feedbackType => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  return (
    <div>
      <Description/>
      <Options onLeaveFeedback={updateFeedback} />
      <Feedback feedback={feedback} total={totalFeedback} />
    </div>
  );
}