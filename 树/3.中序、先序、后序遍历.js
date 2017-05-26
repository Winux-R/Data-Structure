/**
 * Created by Jinxin on 2017/5/25.
 */

let root = null;

function createNode (key) {
    let newNode = {
        key: key,
        leftNode: null,
        rightNode: null
    };
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

/**
 *
 * @param node
 * 中序遍历
 */
function inOrderTraverse (node) {
    if (node !== null) {
        inOrderTraverse(node.leftNode);
        console.log(node.key);
        inOrderTraverse(node.rightNode);
    }
}

/**
 *
 * @param key
 * 先序遍历
 */
function preOrderTraverse (node) {
    if (node !== null) {
        console.log(node.key);
        preOrderTraverse(node.leftNode);
        preOrderTraverse(node.rightNode);
    }
}

/**
 *
 * @param key
 * 后序遍历
 */
function postOrderTraverse (node) {
    if (node !== null) {
        postOrderTraverse(node.leftNode);
        postOrderTraverse(node.rightNode);
        console.log(node.key);
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
console.log(inOrderTraverse(root));
console.log(preOrderTraverse(root));
console.log(postOrderTraverse(root));