/**
 * Created by Jinxin on 2017/5/24.
 */

let root = null;
let length = 0;
function createNode (key) {
    let node = {
        key: key,
        leftNode: null,
        rightNode: null
    }
    return node;
}

function insertNode(node, newNode){
    if (node.key > newNode.key) {
        if (node.leftNode === null) {
            node.leftNode = newNode;
        } else {
            node = node.leftNode;
            insertNode(node, newNode)
        }

    } else {
        if (node.rightNode === null) {
            node.rightNode = newNode;
        } else {
            node = node.rightNode;
            insertNode(node, newNode);
        }
    }
}

function searchNode (node, key) {
    if (node.key === key) {
        console.log("true")
    } else if (node.leftNode === null && node.rightNode === null) {
        console.log("false")
    } else {
        if (node.leftNode && node.leftNode.key > key) {
            searchNode(node.leftNode, key)
        } else {
            searchNode(node.rightNode, key)
        }
    }
}

function createBinarySearchTree (key) {
    let node  = createNode(key);
    if (root === null) {
        root = node;
    }else {
        insertNode(root, node);
    }
}
createBinarySearchTree(5);
createBinarySearchTree(2);
createBinarySearchTree(9);
createBinarySearchTree(88);
createBinarySearchTree(45);
createBinarySearchTree(7);
searchNode(root, 6);
