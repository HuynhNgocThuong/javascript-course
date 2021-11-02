// Refer:  https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/
function createBinarySearchTree(initKeylist) {
  let root = null;

  if (Array.isArray(initKeylist) && initKeylist.length > 0) {
    initKeylist.forEach((key) => {
      root = insert(root, key);
    });
  }

  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };

    // Base case
    if (node == null) return newNode;
    if (node.key === key) return node;

    let currentNode;
    if (key > node.key) {
      currentNode = node.right;
      node.right = insert(currentNode, key);
    } else {
      currentNode = node.left;
      node.left = insert(currentNode, key);
    }

    return node;
  }

  function findMin(node) {
    if (node == null) return null;
    let minNode = node;
    while (minNode.left != null) {
      minNode = minNode.left;
    }
    return minNode;
  }

  function findMax(node) {
    if (node == null) return null;
    let maxNode = node;
    while (maxNode.right != null) {
      maxNode = maxNode.right;
    }
    return maxNode;
  }

  function searchNode(node, key) {
    if (node == null) return null;
    if (key > node.key) return searchNode(node.right, key);
    if (key < node.key) return searchNode(node.left, key);

    // Node had value equal input key
    return node;
  }

  function getMaxNodesCount(node) {
    if (node == null) return 0;
    const leftHeight = getMaxNodesCount(node.left);
    const rightHeight = getMaxNodesCount(node.right);

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  function getHeight() {
    const height = getMaxNodesCount(root);
    return height > 0 ? height - 1 : 0;
  }

  function printNodesAtLevel(node, level) {
    if (node == null) return;
    if (level === 0) {
      console.log(node.key);
      return;
    }
    printNodesAtLevel(node.left, level - 1);
    printNodesAtLevel(node.right, level - 1);
  }

  function bfs() {
    const height = getHeight();
    for (let index = 0; index <= height; index++) {
      printNodesAtLevel(root, index);
    }
  }

  function dfs() {}

  function printInOrder(node) {
    if (node == null) return;
    printInOrder(node.left);
    console.log(node.key);
    printInOrder(node.right);
  }

  function printPreOrder(node) {
    if (node == null) return;
    console.log(node.key);
    printInOrder(node.left);
    printInOrder(node.right);
  }

  function printPostOrder(node) {
    if (node == null) return;
    printInOrder(node.left);
    printInOrder(node.right);
    console.log(node.key);
  }

  function remove(node, key) {
    if (node == null) return null;

    // find untill we get at the node to be delete
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }
    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }

    if (node.left == null && node.right == null) return null;

    if (node.left == null) {
      node = node.right;
      return node;
    }

    if (node.right == null) {
      node = node.left;
      return node;
    }

    // two children
    const minNode = findMin(node.right);
    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);
    return node;
  }

  return {
    root,
    insert,
    findMin,
    findMax,
    searchNode,
    printNodesAtLevel,
    bfs,
    printInOrder,
    printPreOrder,
    printPostOrder,
    remove,
  };
}
const binarySearchTree = createBinarySearchTree([10, 7, 15, 5, 9, 20, 13, 17]);
console.log(binarySearchTree.root);
console.log(binarySearchTree.searchNode(binarySearchTree.root, 7));
// binarySearchTree.bfs();
binarySearchTree.printInOrder(binarySearchTree.root);
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 5);
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 20);
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 10);
console.log('----------');
binarySearchTree.printInOrder(binarySearchTree.root);
