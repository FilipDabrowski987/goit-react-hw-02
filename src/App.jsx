import React, { useState } from 'react';
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
  
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };
  
  return (
    <div>
      <Description/>
      <Options onLeaveFeedback={handleFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}