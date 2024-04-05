import React, { useState } from "react";
import "./Box.css";

const Box = ({ depth = 0 }) => {
  const [childBoxes, setChildBoxes] = useState([]);

  const handleBoxClick = (event) => {
    // Stop event propagation to prevent adding a box to parent boxes
    event.stopPropagation();

    // Create a new child box
    const newChildBox = <Box depth={depth + 1} />;
    // Add the new child box to the list of child boxes
    setChildBoxes((prevChildBoxes) => [...prevChildBoxes, newChildBox]);
  };

  return (
    <div className={`box `} onClick={handleBoxClick}>
      Box {depth}
      <div className="child-boxes">
        {childBoxes.map((childBox, index) => (
          <div key={index} className="child-box">
            {childBox}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
