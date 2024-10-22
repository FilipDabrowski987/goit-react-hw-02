import { useState, useEffect } from 'react';
import './App.css'
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(window.localStorage.getItem('saved-feedback'));
    return savedFeedback || {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });
  
  const updateFeedback = feedbackType => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () =>
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })
  
  // const savedFeedback = window.localStorage.getItem("saved-feedback");

  // if (savedFeedback !== null) {
  //   return JSON.parse(savedFeedback);
  // }

  // return {};
  
  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);
  
  return (
    <div>
      <Description />
      <Options onLeaveFeedback={updateFeedback} onReset={resetFeedback} total={totalFeedback} />
      {totalFeedback > 0 && <Feedback feedback={feedback} total={totalFeedback} />}
    </div>
  );
}