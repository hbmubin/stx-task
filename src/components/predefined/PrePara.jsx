import React from "react";

const PrePara = ({ item, onDragStart }) => {
  return (
    <div className="cursor-grab" draggable onDragStart={(e) => onDragStart(e, item)} style={item?.parentStyles}>
      <p style={item?.styles}>{item.content}</p>
    </div>
  );
};

export default PrePara;
