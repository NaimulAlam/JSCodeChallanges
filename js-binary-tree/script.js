const getTreeData = () => {
  return {
    element: "test",
    left: {
      element: "test01",
      left: {
        element: "test11",
      },
      right: {
        element: "test12",
      },
    },
    right: {
      element: "test02",
      left: {
        element: "test21",
      },
      right: {
        element: "test22",
        left: {
          element: "test221",
          left: {
            element: "test2211",
          },
        },
      },
    },
  };
};

const renderTree = (node) => {
  const { left, right, element } = node;
  return `
        <div class="node_element">${element}</div>
          ${
            left || right
              ? `
    <div class="node_bottom-line"></div>
            <div class="node_children">
              ${
                left
                  ? `<div class="node node-left">
                ${renderTree(left)}
              </div>`
                  : ""
              }
              ${
                right
                  ? `<div class="node node-right">
                ${renderTree(right)}
              </div>`
                  : ""
              }
            </div>
            `
              : ""
          }
          `;
};

const main = () => {
  const rootNode = getTreeData();
  const treeDOMElement = document.querySelector(".tree");
  treeDOMElement.innerHTML = renderTree(rootNode);
};

main();
