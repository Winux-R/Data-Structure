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

function removeNode(node, key) {
    if (node !== null) {
        if (node.key > key) {
            node.leftNode = removeNode(node.leftNode, key);
            return node;
        } else if (node.key < key) {
            node.rightNode = removeNode(node.rightNode, key);
            return node;
        } else {
            if (node.leftNode === null && node.rightNode === null) {
                node = null;
                return node;
            } else if (node.leftNode === null) {
                node = node.rightNode;
                return node;
            } else if (node.leftNode === null) {
                node = node.rightNode;
                return node;
            }else if (node.rightNode !== null && node.leftNode !== null) {
                node.key = findRightMinNode(node.rightNode);
                node.leftNode = removeNode(node.rightNode, node.key);
                return node;
            }
        }
    }

}

function findRightMinNode (node) {
    if (node !== null) {
        while (node && node.leftNode !== null) {
            node = node.leftNode;
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
createBinarySearchTree(10);
createBinarySearchTree(5);
createBinarySearchTree(15);
createBinarySearchTree(2);
createBinarySearchTree(8);
createBinarySearchTree(12);
createBinarySearchTree(18);
createBinarySearchTree(0);
createBinarySearchTree(3);
createBinarySearchTree(7);
createBinarySearchTree(9);
createBinarySearchTree(11);
createBinarySearchTree(13);
createBinarySearchTree(17);
createBinarySearchTree(19);
console.log(createBinarySearchTree(10));
console.log(removeNode(root, 5));