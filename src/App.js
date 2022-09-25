import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("Raghav");
  const setnewName = (newName) => {
    setName((_name) => newName);
  };
  return (
    <div className="App">
      <p>I am {name}</p>
      <button onClick={() => setnewName("Ram")}>Ram</button>
      <button onClick={() => setnewName("Rohan")}>Rohan</button>
      <button onClick={() => setnewName("Suresh")}>Suresh</button>
    </div>
  );
}
