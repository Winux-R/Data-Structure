/**
 * Created by Jinxin on 2017/5/10.
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

function addElement(element, position) {
    let node = createNode(element);
    if (head === null) {
        head = node;
        tail = node;
        head.next = tail;
        head.prev = tail;
        tail.prev = head;
        tail.next = head;
    } else {
        let previous = {};
        let doubleLinkList = head;
        let index = 0;
        while(index < position) {
            previous = doubleLinkList;
            if (doubleLinkList.next !== head) {
                doubleLinkList= doubleLinkList.next;
            }
            index++;
        }
        if (doubleLinkList.next === head) {
            tail = node;
            node.prev = previous;
            previous.next = node;
            tail.next = head;
            head.prev = tail;
        }
    }
    length++;
    return head;
}

console.log(addElement("a", 0));
console.log(addElement("b", 1));
console.log(addElement("c", 2));
console.log(addElement("d", 3));
console.log(addElement("e", 4));
console.log(addElement("f", 5));