import React from "react";

const Decrease = (props) => {
  const [value, setValue] = props.propValue;
  const decBtn = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      alert(`Can't Decrease Negative`);
    }
  };
  return (
    <div>
      <button onClick={decBtn}>Decrease</button>
    </div>
  );
};

export default Decrease;
