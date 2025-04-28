const PreHeading = ({ item, onDragStart }) => {
  return (
    <div className="cursor-grab " draggable onDragStart={(e) => onDragStart(e, item)} style={item?.parentStyles}>
      <h2 style={item?.styles}>{item.content}</h2>
    </div>
  );
};

export default PreHeading;
