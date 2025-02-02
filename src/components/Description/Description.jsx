import clsx from "clsx";
import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={clsx(css.descrCont)}>
      <h1 className={clsx(css.descrTitle)}>Sip Happens Café</h1>
      <p className={clsx(css.descrText)}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
