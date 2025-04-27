import SidebarLeft from "./components/SidebarLeft"
import SidebarRight from "./components/SidebarRight"
import TopBar from "./components/TopBar"
import Canvas from "./components/Canvas"

function DragDrop() {

  return (
    <div className="h-dvh w-dvw flex flex-col overflow-hidden">
      <TopBar />
      <div className="grid grid-cols-5 flex-grow overflow-hidden">
        <SidebarLeft />
        <Canvas />
        <SidebarRight />
      </div>
    </div>
  )
}

export default DragDrop
