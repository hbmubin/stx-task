
const usePredefined = () => {
  const predefinedComponents = [
    {
      id: 1,
      type: "nav",
      content: "Storex BD",
      styles: {
        fontSize: "24.5px",
        color: "#000000",
        padding: "10px",
        textAlign: "center",
        fontWeight: "700",
      },
      parentStyles: {
        backgroundColor: "#d0ee0e",
        marginBottom: "10px",
      },
    },
    {
      id: 2,
      type: "heading",
      content: "Welcome to Storex BD",
      styles: {
        fontSize: "18px",
        color: "#000000",
        padding: "8px",
        textAlign: "center",
        fontWeight: "700",
      },
      parentStyles: {
        backgroundColor: "#a1a1a1",
        borderRadius: "8px",
        marginBottom: "5px",
      },
    },
    {
      id: 3,
      type: "paragraph",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at temporibus excepturi minus a tempore aliquid quidem mollitia nulla maiores.",
      styles: {
        fontSize: "16px",
        color: "#000000",
        padding: "6px",
        textAlign: "justify",
        lineHeight: "1.5",
      },
      parentStyles: {
        backgroundColor: "#dddddd",
        borderRadius: "0px",
        marginBottom: "5px",
      },
    },
  ];
  

    return predefinedComponents
};

export default usePredefined;