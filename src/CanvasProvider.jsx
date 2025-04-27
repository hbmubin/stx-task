import { createContext, useRef, useState } from "react";



export const CanvasContext = createContext(null)

const CanvasProvider = ({children}) => {
    const [canvas, setCanvas] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const rightSideRef = useRef(null)
    const func = {
        canvas, setCanvas, selectedIndex, setSelectedIndex, rightSideRef
    }
    return (<CanvasContext value={func}>{children}</CanvasContext>)
};

export default CanvasProvider;