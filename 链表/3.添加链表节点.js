/**
 * Created by Jinxin on 2017/5/8.
 */
let head = null;
let length = 0;

function createNode(element) {
    let node = {
        nodeElement: element,
        next: null
    }
    return node;
}

function addElement(element, position) {
    if (head === null) {
        head = createNode(element);
    } else {
        let newNode = createNode(element);
        if (position === 0) {
            newNode.next = head;
            head = newNode;
        } else {
            let newNode = createNode(element);
            let linkList = head;
            let previous = {};
            let index = 0;
            while (index < position) {
                previous = linkList;
                if (linkList.next !== null) {
                    linkList = linkList.next;
                }
                index++;
            }
            if (linkList.next !== null) {
                newNode.next = linkList;
                previous.next = newNode;
            } else {
                linkList.next = newNode;
            }
        }

    }
    length++;
    return head;
}

console.log(addElement("a", 0));
console.log(addElement("b", 1));
console.log(addElement("c", 2));
console.log(addElement("d", 1));