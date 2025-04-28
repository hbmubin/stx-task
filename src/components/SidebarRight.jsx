import React, { useContext, useEffect, useState } from "react";
import { CanvasContext } from "../CanvasProvider";

const SidebarRight = () => {
  const { canvas, setCanvas, selectedIndex, rightSideRef } = useContext(CanvasContext);
  const item = canvas[selectedIndex];

  const [fontSize, setFontSize] = useState(parseFloat(item?.styles.fontSize));
  const [padding, setPadding] = useState(parseFloat(item?.styles.padding));
  const [marginBottom, setMarginBottom] = useState(parseFloat(item?.parentStyles.marginBottom));
  const [borderRadius, setBorderRadius] = useState(parseFloat(item?.parentStyles.borderRadius));

  const fontColor = item?.styles.color || "#000000";
  const parentBgColor = item?.parentStyles.backgroundColor || "#ffffff";
  const [fontWeight, setFontWeight] = useState(item?.parentStyles.fontWeight || "400");
  const [textAlign, setTextAlign] = useState(item?.parentStyles.textAlign || "left");

  const updateStyleProperty = (property, value) => {
    const newCanvas = canvas.map((item, idx) => {
      if (idx === selectedIndex) {
        return {
          ...item,
          styles: {
            ...item.styles,
            [property]: value,
          },
        };
      }
      return item;
    });
    setCanvas(newCanvas);
  };

  const updateParentStyleProperty = (property, value) => {
    const newCanvas = canvas.map((item, idx) => {
      if (idx === selectedIndex) {
        return {
          ...item,
          parentStyles: {
            ...item.parentStyles,
            [property]: value,
          },
        };
      }
      return item;
    });
    setCanvas(newCanvas);
  };

  const handleFontSizeChange = (e) => {
    updateStyleProperty("fontSize", `${e.target.value}px`);
  };

  const handleFontColorChange = (e) => {
    updateStyleProperty("color", e.target.value);
  };

  const handleFontWeightChange = (e) => {
    updateStyleProperty("fontWeight", e.target.value);
  };

  const handleTextAlignChange = (e) => {
    updateStyleProperty("textAlign", e.target.value);
  };

  const handlePaddingChange = (e) => {
    updateStyleProperty("padding", `${e.target.value}px`);
  };

  const handleParentBgColorChange = (e) => {
    updateParentStyleProperty("backgroundColor", e.target.value);
  };

  const handleMarginBottomChange = (e) => {
    updateParentStyleProperty("marginBottom", `${e.target.value}px`);
  };
  const handleBorderRadiusChange = (e) => {
    updateParentStyleProperty("borderRadius", `${e.target.value}px`);
  };

  useEffect(() => {
    setFontSize(parseFloat(item?.styles.fontSize));
    setFontWeight(item?.styles.fontWeight);
    setTextAlign(item?.styles.textAlign);
    setPadding(parseFloat(item?.styles.padding));
    setMarginBottom(parseFloat(item?.parentStyles.marginBottom));
    setBorderRadius(parseFloat(item?.parentStyles.borderRadius));
  }, [selectedIndex, item]);

  return (
    <aside className="col-span-1 bg-gray-400 p-3 ">
      {selectedIndex !== null && (
        <div ref={rightSideRef} className="flex flex-col gap-2">
          {item?.styles.fontSize && (
            <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded">
              <div>Font Size</div>
              <div className="flex">
                <input type="number" value={fontSize || 16} onChange={(e) => handleFontSizeChange(e)} className="border px-1 py-0.5 border-gray-400 w-20 rounded outline-0" />
                <span className="pl-2">px</span>
              </div>
            </div>
          )}
          {item?.styles.padding && (
            <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded">
              <div>Padding</div>
              <div className="flex">
                <input type="number" value={padding || 0} onChange={(e) => handlePaddingChange(e)} className="border px-1 py-0.5 border-gray-400 w-20 rounded outline-0" />
                <span className="pl-2">px</span>
              </div>
            </div>
          )}
          {item?.parentStyles.borderRadius && (
            <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded">
              <div>Border Radius</div>
              <div className="flex">
                <input type="number" value={borderRadius || 0} onChange={(e) => handleBorderRadiusChange(e)} className="border px-1 py-0.5 border-gray-400 w-20 rounded outline-0" />
                <span className="pl-2">px</span>
              </div>
            </div>
          )}
          {item?.parentStyles.marginBottom && (
            <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded">
              <div>Margin Bottom</div>
              <div className="flex">
                <input type="number" value={marginBottom || 0} onChange={(e) => handleMarginBottomChange(e)} className="border px-1 py-0.5 border-gray-400 w-20 rounded outline-0" />
                <span className="pl-2">px</span>
              </div>
            </div>
          )}

          {item?.styles.fontWeight && (
            <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded">
              <div>Font Weight</div>
              <div className="">
                <select value={fontWeight} onChange={(e) => handleFontWeightChange(e)} className="bg-gray-200 px-2 py-0.5 rounded text-gray-800" name="" id="">
                  <option value="300">light</option>
                  <option value="400">normal</option>
                  <option value="700">bold</option>
                </select>
              </div>
            </div>
          )}

          {item?.styles.textAlign && (
            <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded">
              <div>text Align</div>
              <div className="">
                <select value={textAlign} onChange={(e) => handleTextAlignChange(e)} className="bg-gray-200 px-2 py-0.5 rounded text-gray-800" name="" id="">
                  <option value="left">left</option>
                  <option value="center">center</option>
                  <option value="right">right</option>
                  <option value="justify">justify</option>
                </select>
              </div>
            </div>
          )}

          {item?.styles.color && (
            <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded">
              <div>Font Color</div>
              <input type="color" value={fontColor} onChange={handleFontColorChange} className="w-16 h-10 rounded" />
            </div>
          )}

          {item?.parentStyles.backgroundColor && (
            <div className="flex bg-gray-700 py-2 px-4 text-neutral-200 justify-between rounded">
              <div>Background Color</div>
              <input type="color" value={parentBgColor} onChange={handleParentBgColorChange} className="w-16 h-10 rounded" />
            </div>
          )}
        </div>
      )}
    </aside>
  );
};

export default SidebarRight;
