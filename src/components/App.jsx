import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { useState, useEffect } from "react";

export default function App() {
  const initialVotes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [votes, setVotes] = useState(() => {
    const savedVotes = window.localStorage.getItem("saved-votes");

    if (savedVotes !== null) {
      return JSON.parse(savedVotes);
    }
    return initialVotes;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-votes", JSON.stringify(votes));
  }, [votes]);

  const totalFeedback = votes.good + votes.neutral + votes.bad;

  const updateFeedback = (feedbackType) => {
    setVotes((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const handleReset = () => {
    setVotes({ ...initialVotes });
  };

  const optionsProps = { votes, updateFeedback, handleReset, totalFeedback };
  const feedbackProps = { votes, totalFeedback };

  return (
    <div className="appContainer">
      <Description />
      <Options {...optionsProps} />
      <Feedback {...feedbackProps} />
    </div>
  );
}
