/**
 * Created by Jinxin on 2017/5/11.
 */
let item = {};
function Set() {
    this.addOrDelete = function (value) {
        if (!item.hasOwnProperty(value)){
            item[value] = value;
        }else {
            delete item[value];
        }
    };
}
function intersection (items) {
    let intersectionSet = new Set();
    for (let value in items) {
        intersectionSet.addOrDelete(items[value]);
    }
    return item;
}
console.log(intersection({ "A": "a", "B": "b", "C": "c" }));
console.log(intersection({ "A": "a", "B1": "b1", "C1": "c1" }));