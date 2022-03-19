import React from "react";

const Increase = (props) => {
  const [value, setValue] = props.propValue;
  const incBtn = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <button
        className="bg-success text-white py-2 px-3 rounded-3 fw-bold"
        onClick={incBtn}
      >
        Increase
      </button>
    </div>
  );
};

export default Increase;
