import React from 'react';

const PrePara = ({ item, onDragStart }) => {

    return (
            <div className='w-full cursor-grab' draggable
            onDragStart={(e) => onDragStart(e, item)}  style={{ backgroundColor: item?.parentStyles.backgroundColor }}>
                <p style={{ fontSize: item?.styles.fontSize, color: item?.styles.color }}>{item.content}</p>
            </div>
    );
};

export default PrePara;