/**
 * Created by Jinxin on 2017/5/11.
 */
let item = {};
function Set() {
    this.add = function (value) {
        if (!item.hasOwnProperty(value)) {
            item[value] = value;
        }
    }
}

function Union(items) {
    let unionSet = new Set();
    for (let value in items) {
        unionSet.add(items[value]);
    }
    return item;
}
console.log(Union({ "A": "a", "B": "b", "C": "c" }));
console.log(Union({ "A": "a", "B1": "b1", "C1": "c1" }));