/**
 * Created by Jinxin on 2017/5/11.
 */
let item = {};
function Set() {
    this.subset = function (items) {
        for (let value in items) {
            if (!item.hasOwnProperty(items[value])) {
                return false;
            }
        }
        return true;
    }
}
function firstItem(items) {
    for (let value in items) {
        if (!item.hasOwnProperty(items[value])) {
            item[items[value]] = items[value];
        }
    }
    return item;
}
let subSet = new Set();
console.log(firstItem({ "A": "a", "B": "b", "C": "c" }));
console.log(subSet.subset({ "A": "a" }));
