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
        prve: null
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
        let previous = {};
        if (position === 0) {
            newNode.next = doubleLinkList;
            doubleLinkList.prev = newNode;
            head = newNode;
            tail = newNode;
        } else {
            let index = 0;
            while(index < position ) {
                previous = doubleLinkList;
                if (doubleLinkList.next !== null) {
                    doubleLinkList = doubleLinkList.next;
                }
                index++;
            }
            if (doubleLinkList.next !== null) {
                newNode.next = doubleLinkList;
                doubleLinkList.prve = newNode;
            } else {
                tail = doubleLinkList
            }
            previous.next = newNode;
            newNode.prve = previous;
        }
    }
    length++;
    return head;
}
console.log(addElement("a", 0));
console.log(addElement("b", 1));
console.log(addElement("c", 2));
console.log(addElement("d", 1));
console.log(addElement("e", 0));
console.log(addElement("f", 5));