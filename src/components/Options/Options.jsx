import clsx from "clsx";
import css from "./Options.module.css";

export default function Options({
  votes,
  updateFeedback,
  totalFeedback,
  handleReset,
}) {
  const grades = Object.keys(votes);

  return (
    <div className={clsx(css.optionsCont)}>
      {grades.map((grade) => (
        <button
          className={clsx(css.optionsBtn)}
          onClick={() => updateFeedback(grade)}
          key={grade}
        >
          {grade}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
