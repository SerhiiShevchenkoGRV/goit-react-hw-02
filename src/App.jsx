import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import FeedBack from "./components/Feedback/Feedback";

export default function App() {
  return (
    <div className="appContainer">
      <Description />
      <Options />
      <FeedBack />
    </div>
  );
}
