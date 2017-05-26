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

function searchNode (node, key) {
    if (node !== null) {
        if (node.key > key) {
            searchNode(node.leftNode, key)
        } else if (node.key < key) {
            searchNode(node.rightNode, key)
        } else {
            console.log("找到该键值" + node.key);
        }
    }else {
        console.log("树不存在")
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
console.log(searchNode(root, 4));