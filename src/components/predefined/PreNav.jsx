const PreNav = ({ item, onDragStart }) => {
    return (
        <header
            draggable
            onDragStart={(e) => onDragStart(e, item)} 
            style={{ backgroundColor: item?.parentStyles.backgroundColor }}
            className="w-full py-2 text-center cursor-grab"
        >
            <h3 className="font-semibold" style={{ fontSize: item?.styles.fontSize, color: item?.styles.color }}>
                {item.content}
            </h3>
        </header>
    );
};

export default PreNav;
