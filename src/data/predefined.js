import React from 'react';

const usePredefined = () => {
    const predefinedComponents = [
      {
        id: 1,
        type: "nav",
        content: "Storex BD",
        styles: {
          fontSize: "24.5px",
          color: "#000000",
        },
        parentStyles: {
          backgroundColor: "#d0ee0e",
        },
      },
      {
        id: 2,
        type: "heading",
        content: "Welcome to Storex BD",
        styles: {
          fontSize: "28px",
          color: "#000000",
        },
        parentStyles: {
          backgroundColor: "#dddddd",
        },
      },
      {
        id: 3,
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at temporibus excepturi minus a tempore aliquid quidem mollitia nulla maiores.",
        styles: {
            fontSize: "16px",
            color: "#000",
          },
          parentStyles: {
            backgroundColor: "#dddddd",
          },
      },
    ];

    return predefinedComponents
};

export default usePredefined;