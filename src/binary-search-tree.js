const {
  NotImplementedError,
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data; // node value
    this.left = null; // left node child reference
    this.right = null; // right node child reference
  }
}

class BinarySearchTree {
  constructor() {
    this.rootElem = null; // корень bst
  }

  root() {
    return this.rootElem;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootElem === null) {
      this.rootElem = newNode;
    } else {
      this.insertNode(this.rootElem, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    if (this.rootElem === null) {
      return false;
    } else {
      return this.hasNode(this.rootElem, data);
    }
  }
  hasNode(node, data) {
    if (data === node.data) {
      return true;
    }
    if (data < node.data) {
      if (node.left === null) {
        return false;
      } else {
        return this.hasNode(node.left, data);
      }
    } else {
      if (node.right === null) {
        return false;
      } else {
        return this.hasNode(node.right, data);
      }
    }
  }
  find(data) {
    if (this.rootElem === null) {
      return null;
    } else {
      return this.findNode(this.rootElem, data);
    }
  }
  findNode(node, data) {
    if (data === node.data) {
      return node;
    }
    if (data < node.data) {
      if (node.left === null) {
        return null;
      } else {
        return this.findNode(node.left, data);
      }
    } else {
      if (node.right === null) {
        return null;
      } else {
        return this.findNode(node.right, data);
      }
    }
  }
  remove(data) {
    if (this.rootElem !== null) {
      this.removeNode(this.rootElem, data);
    }
  }
  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (node.data === data) {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      const min = this.findMin(node.right);
      node.data = min.data;
      node.right = this.removeNode(node.right, min.data);
      return node;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else {
      node.right = this.removeNode(node.right, data);
    }
    return node;
  }
  findMin(node) {
    if (!node.left) {
      return node;
    }
    return this.findMin(node.left);
  }

  min() {
    if (this.rootElem === null) {
      return null;
    } else {
      return this.minNode(this.rootElem);
    }
  }
  minNode(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this.minNode(node.left);
    }
  }
  max() {
    if (this.rootElem === null) {
      return null;
    } else {
      return this.maxNode(this.rootElem);
    }
  }
  maxNode(node) {
    if (node.right === null) {
      return node.data;
    } else {
      return this.maxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
