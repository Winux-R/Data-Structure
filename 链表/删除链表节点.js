/**
 * Created by Jinxin on 2017/5/5.
 */

let length = 0;
let head = null;

function node (element) {
    let node = {
        nodeElement: element,
        next: null
    };
    return node;
}

function createNode (element) {
    let listNode = node(element);
    if (head === null) {
        head = listNode;
    } else {
        let current = head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = listNode;
    }
    length++;
    return head;
}

function deleteNode (linkList, position) {
    let linkListCopy = linkList;
    if (linkListCopy === null) {
        console.log("该链表为空");
    } else {
        if (position === 0) {
            linkList = linkListCopy.next;
        } else {
            let index = 0;
            let previous = {};
            while (index < position) {
                previous = linkListCopy;
                linkListCopy = linkListCopy.next;
                index++;
            }
            previous.next = linkListCopy.next;
        }
        length--;
    }
    head = linkList;
    return head;
}
createNode("a");
createNode("b");
createNode("c");
console.log(createNode("d"));
console.log(deleteNode(head, 0));
console.log(deleteNode(head, 2));


