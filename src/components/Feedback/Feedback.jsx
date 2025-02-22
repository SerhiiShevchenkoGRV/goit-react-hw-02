import clsx from "clsx";
import css from "./Feedback.module.css";

export default function Feedback({ votes, totalFeedback, positiveFeedback }) {
  const grades = Object.keys(votes);

  return (
    <div className={clsx(css.feedbackCont)}>
      <ul className={clsx(css.feedbackList)}>
        {grades.map((grade) => (
          <li key={grade}>
            {grade}: {votes[grade]}
          </li>
        ))}
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}
