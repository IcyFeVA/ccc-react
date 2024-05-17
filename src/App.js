import "./styles.css";
import Greeting from "./Greeting.js";
import ClickCounter from "./Clicker.js";

export default function App() {
  return (
    <div className="App">
      <ClickCounter startAt={0} />
      <ClickCounter startAt={99} />
    </div>
  );
}
