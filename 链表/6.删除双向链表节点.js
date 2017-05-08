/**
 * Created by Jinxin on 2017/5/8.
 */
let head = null;
let tail = null;
let length = 0;

function createNode (element) {
    let node = {
        element: element,
        next: null,
        prev: null
    }
    return node;
}

function addElement(element, position) {
    let newNode = createNode(element);
    if (head === null) {
        head = newNode;
        tail = newNode;
    } else {
        let doubleLinkList = head;
        if (position === 0) {
            newNode.next = doubleLinkList;
            doubleLinkList.prev = newNode;
            head = newNode;
            tail = newNode;
        } else {
            let index = 0;
            let previous = {};
            while(index < position) {
                previous = doubleLinkList;
                if (doubleLinkList.next !== null) {
                    doubleLinkList = doubleLinkList.next;
                }
                index++;
            }
            if (doubleLinkList.next !== null) {
                doubleLinkList.prev = newNode;
                newNode.next = doubleLinkList;
            } else {
                tail = newNode;
            }
            previous.next = newNode;
            newNode.prev = previous;
        }
    }
    length++;
    return head;
}

function deleteElement(linkList, position) {
    if (position === 0) {
        head = linkList.next;
        head.prev = null;
    } else {
        let doubleLinkList = linkList;
        let index = 0;
        while (index < position) {
            previous = doubleLinkList;
            if (doubleLinkList.next !== null) {
                doubleLinkList = doubleLinkList.next;
            }
            index++;
        }
        if (doubleLinkList.next !== null) {
            previous.next = doubleLinkList.next;
            doubleLinkList.next.prev = previous;
        } else {
            previous.next = null;
            tail = previous;
        }
    }
    return head;
}

console.log(addElement("a", 0));
console.log(addElement("b", 1));
console.log(addElement("c", 2));
console.log(addElement("d", 3));
console.log(addElement("e", 4));
console.log(addElement("f", 5));
console.log(deleteElement(head, 0));
console.log(deleteElement(head, 5));
console.log(deleteElement(head, 2));