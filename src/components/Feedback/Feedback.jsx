import clsx from "clsx";
import css from "./Feedback.module.css";

export default function Feedback({ votes, totalFeedback }) {
  const grades = Object.keys(votes);

  return (
    <div className={clsx(css.feedbackCont)}>
      {totalFeedback > 0 ? (
        <ul className={clsx(css.feedbackList)}>
          {grades.map((grade) => (
            <li key={grade}>
              {grade}: {votes[grade]}
            </li>
          ))}
          <li>Total: {totalFeedback}</li>
          <li>Positive: {Math.round((votes.good / totalFeedback) * 100)}%</li>
        </ul>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}
