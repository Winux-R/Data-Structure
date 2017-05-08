/**
 * Created by Jinxin on 2017/4/27.
 */

function linkList() {
    let Node = function (element) {
        this.node = element;
        this.next = null;
    };
    let length = 0;
    let head = null;
    this.append = function (element) {
        let node = new Node(element);
        let nodelist = {};
        if (head === null) {
            head = node;
        } else {
            nodelist = head;
            while (nodelist.next) {
                nodelist = nodelist.next;
            }
            nodelist.next = node;
        }
        length++;
        return head;
    };
}
let list = new linkList();
console.log(list.append("This is first node!"));
console.log(list.append("This is second node!"));
console.log(list.append("This is third node!"));

