// Реализовать DFS inorder, preorder and postorder

// function inorder(tree) {
// }
// function preorder(tree) {
// }
// function postorder(tree) {
// }

// Обход дерева в порядке inorder
function inorder(tree) {
  if (tree !== null) {
    inorder(tree.left);
    console.log(tree.value);
    inorder(tree.right);
  }
}

// Обход дерева в порядке preorder
function preorder(tree) {
  if (tree !== null) {
    console.log(tree.value);
    preorder(tree.left);
    preorder(tree.right);
  }
}

// Обход дерева в порядке postorder
function postorder(tree) {
  if (tree !== null) {
    postorder(tree.left);
    postorder(tree.right);
    console.log(tree.value);
  }
}
const tree = {
  value: 5,
  left: {
    value: 3,
    left: null,
    right: null,
  },
  right: {
    value: 8,
    left: null,
    right: null,
  },
};

//     5
//   /   \
//  3     8
