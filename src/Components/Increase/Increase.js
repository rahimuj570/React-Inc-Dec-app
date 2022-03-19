import React from "react";

const Increase = (props) => {
  const [value, setValue] = props.propValue;
  const incBtn = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <button onClick={incBtn}>Increase</button>
    </div>
  );
};

export default Increase;
