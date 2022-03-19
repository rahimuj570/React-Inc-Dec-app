import React from "react";

const Decrease = (props) => {
  const [value, setValue] = props.propValue;
  const decBtn = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      alert(`Can't Decrease Zero`);
    }
  };
  return (
    <div>
      <button
        className="bg-danger text-white py-2 px-3 rounded-3 fw-bold"
        onClick={decBtn}
      >
        Decrease
      </button>
    </div>
  );
};

export default Decrease;
