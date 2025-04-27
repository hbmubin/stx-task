import PreNav from "./predefined/PreNav.jsx";
import PreHeading from "./predefined/PreHeading.jsx";
import PrePara from "./predefined/PrePara.jsx";
import usePredefined from "../data/predefined.js";

const SidebarLeft = () => {
    const predefinedComponents = usePredefined();

    const handleDragStart = (e, item) => {
        e.dataTransfer.setData("component", JSON.stringify(item));
    };

    return (
        <aside className="col-span-1 bg-gray-900 shadow text-white p-3 flex flex-col gap-2">
            {predefinedComponents.map((item) => (
                item.type === "nav" ? (
                    <div key={item.id}>
                        <h2 className="mb-2">NavBar</h2>
                        <PreNav item={item} onDragStart={(e) => handleDragStart(e, item)} />
                    </div>
                ) : item.type === "heading" ? (
                    <div key={item.id}>
                        <h2 className="mb-2">Heading</h2>
                        <PreHeading key={item.id} item={item} onDragStart={(e) => handleDragStart(e, item)} />
                    </div>
                ) : item.type === "paragraph" && (
                    <div key={item.id}>
                        <h2 className="mb-2">Paragraph</h2>
                        <PrePara key={item.id} item={item} onDragStart={(e) => handleDragStart(e, item)} />
                    </div>
                )
            ))}
        </aside>
    );
};

export default SidebarLeft;
