/**
 * Created by Jinxin on 2017/5/26.
 */

let root = null;

function createNode (key) {
    let newNode = {
        key: key,
        leftNode: null,
        rightNode: null
    }
    return newNode;
}

function insertNode (node, newNode) {
    if (node.key > newNode.key) {
        if (node.leftNode !== null) {
            insertNode(node.leftNode, newNode);
        } else {
            node.leftNode = newNode;
        }
    } else {
        if (node.rightNode !== null) {
            insertNode(node.rightNode, newNode);
        } else {
            node.rightNode = newNode;
        }
    }
}

function minNode (node) {
    if (node !== null) {
        while (node && node.leftNode !== null) {
            node = node.leftNode;
        }
        return node.key;
    }
}

function maxNode (node) {
    if (node !== null) {
        while (node && node.rightNode !== null) {
            node = node.rightNode;
        }
        return node.key;
    }
}

function createBinarySearchTree (key) {
    let newNode = createNode(key);
    if (root === null) {
        root = newNode;
    } else {
        insertNode(root, newNode);
    }
    return root;
}

console.log(createBinarySearchTree(5));
console.log(createBinarySearchTree(6));
console.log(createBinarySearchTree(7));
console.log(createBinarySearchTree(2));
console.log(createBinarySearchTree(4));
console.log(minNode(root));
console.log(maxNode(root));
