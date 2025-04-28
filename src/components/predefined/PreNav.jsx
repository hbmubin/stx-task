const PreNav = ({ item, onDragStart }) => {
  return (
    <header draggable onDragStart={(e) => onDragStart(e, item)} style={item?.parentStyles} className="cursor-grab">
      <h3 style={item?.styles}>{item.content}</h3>
    </header>
  );
};

export default PreNav;
