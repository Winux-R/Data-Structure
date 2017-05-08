/**
 * Created by Jinxin on 2017/5/8.
 */

let head = null;
let tail = null;
let length = 0;

function createNode(element) {
    let node = {
        element: element,
        next: null,
        prev: null
    }
    return node;
}

function addElement(element) {
    let newNode = createNode(element);
    if (head === null) {
        head = newNode;
        tail = newNode;
    } else {
        let doubleLinkList = head;
        while(doubleLinkList.next !== null) {
            doubleLinkList = doubleLinkList.next;

        }
        doubleLinkList.next = newNode;
        newNode.prev = doubleLinkList;
        tail = newNode;
    }
    length++
    return head;
}

console.log(addElement("This is first node!"));
console.log(addElement("This is second node!"));
console.log(addElement("This is third node!"));
