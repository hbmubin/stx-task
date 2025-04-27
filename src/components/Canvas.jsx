import React, { useContext, useEffect, useRef, useState } from 'react';
import { CanvasContext } from '../CanvasProvider';

const Canvas = () => {
    const { canvas, setCanvas, selectedIndex, setSelectedIndex ,rightSideRef } = useContext(CanvasContext);
    const selectedRef = useRef(null);
    const [isItemDeleted, setIsItemDeleted] = useState(false);

    const addItemToCanvas = (item) => {
        setCanvas((canvas) => [...canvas, item]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("component");
        const item = JSON.parse(data);
        addItemToCanvas(item);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    const deleteItem = (index) => {
        const newCanvas = canvas.filter((item, i) => i !== index);
        setCanvas(newCanvas);
        setSelectedIndex(null)
        setIsItemDeleted(true)
    };

    const handleOnChange = (e, index) => {
        const newCanvas = [...canvas];
        newCanvas[index].content = e.target.value;
        setCanvas(newCanvas);
    };


    useEffect(() => {
        const handleDeselect = (e) => {
            if (selectedRef.current && !selectedRef.current.contains(e.target) && ! rightSideRef.current.contains(e.target)) {
                setSelectedIndex(null);
            }
        };

        if(isItemDeleted){
            setSelectedIndex(null)
            setIsItemDeleted(false)
        }

        document.addEventListener('click', handleDeselect);
        return () => {
            document.removeEventListener('click', handleDeselect);
        };
    }, [setSelectedIndex, rightSideRef, isItemDeleted]);


    const handleTextAreaResize = (e, index) => {
        const textarea = e.target;
        textarea.style.height = 'auto'; 
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <section
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="col-span-3 border-2 border-gray-300 p-1 h-full overflow-auto"
        >
            {canvas.map((item, index) => (
                <div
                    key={index}
                    className={`relative border ${selectedIndex === index ? "border-gray-400" : "border-transparent"}`}
                    onClick={(e) => {
                        setSelectedIndex(index);
                        // handleTextAreaResize(e, index)
                    }}
                    ref={selectedIndex === index ? selectedRef : null}
                >
                    {selectedIndex === index && (
                        <div className="absolute top-0 right-0 bg-red-500 shadow  z-2 flex">
                            <button onClick={() => deleteItem(index)} className="font-medium text-xs text-white cursor-pointer p-1" type="button">
                                Delete
                            </button>
                        </div>
                    )}
                    {item.type === "nav" ? (
                        <header style={{ backgroundColor: canvas[index].parentStyles.backgroundColor }} className="w-full p-3 text-center">
                            <h3 className="font-semibold" style={{ fontSize: canvas[index].styles.fontSize, color: canvas[index].styles.color }}>
                                {selectedIndex === index ? (
                                    <input type="text" value={canvas[index].content} onChange={(e) => handleOnChange(e, index)}  className="text-center w-full outline-1 outline-blue-400" />
                                ) : (
                                    item.content
                                )}
                            </h3>
                        </header>
                    ) : item.type === "heading" ? (
                        <div className="p-1"  style={{ backgroundColor: canvas[index].parentStyles.backgroundColor }}>
                            <h2 className="text-center" style={{ fontSize: canvas[index].styles.fontSize, color: canvas[index].styles.color }}>
                                {selectedIndex === index ? (
                                    <input type="text" value={canvas[index].content} onChange={(e) => handleOnChange(e, index)}  className="text-center w-full outline-1 outline-blue-400" />
                                ) : (
                                    item.content
                                )}
                            </h2>
                        </div>
                    ) : (
                        <div className="p-1"  style={{ backgroundColor: canvas[index].parentStyles.backgroundColor }}>
                            <p style={{ fontSize: canvas[index].styles.fontSize, color: canvas[index].styles.color }}>
                                {selectedIndex === index ? (
                                    <textarea type="text" value={canvas[index].content} onChange={(e) => handleOnChange(e, index)} onInput={(e) => handleTextAreaResize(e, index)} onFocus={(e) => handleTextAreaResize(e, index)} className=" w-full outline-1 outline-blue-400 " />
                                ) : (
                                    item.content
                                )}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Canvas;
