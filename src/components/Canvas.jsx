import React, { useContext, useEffect, useRef, useState } from "react";
import { CanvasContext } from "../CanvasProvider";

const Canvas = () => {
  const { canvas, setCanvas, selectedIndex, setSelectedIndex, rightSideRef } = useContext(CanvasContext);
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
    setSelectedIndex(null);
    setIsItemDeleted(true);
  };

  const handleOnChange = (e, index) => {
    const newCanvas = [...canvas];
    newCanvas[index].content = e.target.value;
    setCanvas(newCanvas);
  };

  useEffect(() => {
    const handleDeselect = (e) => {
      if (selectedRef.current && !selectedRef.current.contains(e.target) && !rightSideRef.current.contains(e.target)) {
        setSelectedIndex(null);
      }
    };

    if (isItemDeleted) {
      setSelectedIndex(null);
      setIsItemDeleted(false);
    }

    document.addEventListener("click", handleDeselect);
    return () => {
      document.removeEventListener("click", handleDeselect);
    };
  }, [setSelectedIndex, rightSideRef, isItemDeleted]);

  const handleTextAreaResize = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <section onDrop={handleDrop} onDragOver={handleDragOver} className="col-span-3 border-2 border-gray-300  h-full overflow-auto">
      {canvas.map((item, index) => (
        <div
          key={index}
          className={`relative border ${selectedIndex === index ? "border-neutral-400" : "border-transparent"}`}
          onClick={() => {
            setSelectedIndex(index);
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
            <header style={canvas[index]?.parentStyles}>
              <h3 style={canvas[index]?.styles}>
                {selectedIndex === index ? (
                  <input type="text" value={canvas[index].content} onChange={(e) => handleOnChange(e, index)} style={{ textAlign: "inherit" }} className=" outline-1 outline-gray-400 w-full" />
                ) : (
                  item.content
                )}
              </h3>
            </header>
          ) : item.type === "heading" ? (
            <div className="p-1" style={canvas[index]?.parentStyles}>
              <h2 style={canvas[index]?.styles}>
                {selectedIndex === index ? (
                  <input type="text" value={canvas[index].content} onChange={(e) => handleOnChange(e, index)} style={{ textAlign: "inherit" }} className=" w-full outline-1 outline-gray-400 w-full" />
                ) : (
                  item.content
                )}
              </h2>
            </div>
          ) : (
            <div className="p-1" style={canvas[index]?.parentStyles}>
              <p style={canvas[index]?.styles}>
                {selectedIndex === index ? (
                  <textarea
                    type="text"
                    value={canvas[index].content}
                    onChange={(e) => handleOnChange(e, index)}
                    style={{ textAlign: "inherit" }}
                    onInput={(e) => handleTextAreaResize(e, index)}
                    onFocus={(e) => handleTextAreaResize(e, index)}
                    className=" outline-1 outline-gray-400 w-full"
                  />
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
