import React, { useContext, useEffect, useState } from 'react';
import { CanvasContext } from "../CanvasProvider";

const SidebarRight = () => {
  const { canvas, setCanvas, selectedIndex, rightSideRef } = useContext(CanvasContext);
  const item = canvas[selectedIndex];

  const [fontSize , setFontSize] = useState(parseFloat(item?.styles.fontSize, 10))
  const fontColor = item?.styles.color || '#000000'; 
  const parentBgColor = item?.parentStyles.backgroundColor || '#ffffff'; 

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value)
    const newCanvas = [...canvas];
    newCanvas[selectedIndex].styles.fontSize = `${fontSize}px`;
    setCanvas(newCanvas);
  };

  const handleFontColorChange = (e) => {
    const newFontColor = e.target.value;
    const newCanvas = [...canvas];
    newCanvas[selectedIndex].styles.color = newFontColor;
    setCanvas(newCanvas);
  };

  const handleParentBgColorChange = (e) => {
    const newBgColor = e.target.value;
    const newCanvas = [...canvas];
    newCanvas[selectedIndex].parentStyles.backgroundColor = newBgColor;
    setCanvas(newCanvas);
  };


  useEffect(()=>{
    setFontSize(parseFloat(item?.styles.fontSize, 10))

  },[selectedIndex, item?.styles])


  return (
    <aside  className="col-span-1 bg-gray-400 p-3 ">
      {
        selectedIndex !== null  && <div ref={rightSideRef} className='flex flex-col'>
        <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded">
          <div>Font Size</div>
          <div className='flex'>
            <input
              type="number"
              value={fontSize || 16} 
              onChange={handleFontSizeChange}
              className="border px-1 py-0.5 border-gray-400 w-20 rounded outline-0"
            />
            <span className="pl-2">px</span>
          </div>
        </div>
  
        <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded mt-2">
          <div>Font Color</div>
          <input
            type="color"
            value={fontColor} 
            onChange={handleFontColorChange}
            className="w-16 h-10 rounded"
          />
        </div>
  
        <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded mt-2">
          <div>Background Color</div>
          <input
            type="color"
            value={parentBgColor} 
            onChange={handleParentBgColorChange}
            className="w-16 h-10 rounded"
          />
        </div>
        </div>
      }
    </aside>
  );
};

export default SidebarRight;
