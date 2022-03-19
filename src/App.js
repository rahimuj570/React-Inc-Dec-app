import "./App.css";
import Increase from "./Components/Increase/Increase";
import Decrease from "./Components/Decrease/Decrease";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 text-center">
      <div>
        <h1 className="bg-primary text-white rounded-pill py-1 my-5 fw-bold display-1">
          {value}
        </h1>
        <div className="d-flex justify-content-center ">
          <Decrease propValue={[value, setValue]}></Decrease>
          <div className="">&nbsp; &nbsp; </div>
          <Increase propValue={[value, setValue]}></Increase>
        </div>
      </div>
    </div>
  );
}

export default App;
