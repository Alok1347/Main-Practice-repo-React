//Counter program with Start and pause button
import "./styles.css";
import { useEffect, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    } else if (!active && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, counter]);

  const handleStart = () => {
    setActive(true);
  };

  const handlePause = () => {
    setActive(false);
  };
  return (
    <div>
      <h1>Welcome to my counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleStart}>Start</button>
      <br />
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
export default App;
