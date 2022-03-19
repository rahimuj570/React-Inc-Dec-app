import logo from "./logo.svg";
import "./App.css";
import Increase from "./Components/Increase/Increase";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="text-center">
      <h1 className="my-5 fw-bold display-1">{value}</h1>
    </div>
  );
}

export default App;
