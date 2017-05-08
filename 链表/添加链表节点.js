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

function addElement(node, position) {
    if (head === null) {
        head = createNode(node);
    } else {
        let newNode = createNode(node);
        if (position === 0) {
            newNode.next = head;
            head = newNode;
        } else {
            let newNode = createNode(node);
            let linkList = head;
            let index = 0;
            while (index < position) {
                if (linkList.next !== null) {
                    linkList = linkList.next;
                }
                index++;
            }
            if (linkList.next !== null) {
                newNode.next = linkList.next;
                linkList.next = newNode;
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
console.log(addElement("d", 0));