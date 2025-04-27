
const PreHeading = ({ item, onDragStart }) => {

    
    return (
            <div className='w-full cursor-grab ' draggable
            onDragStart={(e) => onDragStart(e, item)}  style={{ backgroundColor: item?.parentStyles.backgroundColor }}>
                <h2 className='text-center' style={{ fontSize: item?.styles.fontSize, color: item?.styles.color }}>{item.content}</h2>
            </div>
    );
};

export default PreHeading;