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

function createBinarySearchTree (key) {
    let node  = createNode(key);
    if (root === null) {
        root = node;
    }else {
        insertNode(root, node);
    }
    return root;
}
console.log(createBinarySearchTree(5));
console.log(createBinarySearchTree(6));
console.log(createBinarySearchTree(7));
console.log(createBinarySearchTree(2));
console.log(createBinarySearchTree(4));
