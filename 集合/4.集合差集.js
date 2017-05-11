/**
 * Created by Jinxin on 2017/5/11.
 */
let item = {};
function Set() {
    this.delete = function (value) {
        /**
         * 既然item[value]其实在数值上就等于value，为什么不能delete value？
         * 这里做一点解释，item[value]可确切告诉delete要删除的是item中的value，
         * 而delete value中delete不知道删除谁的value
         */
        delete item[value];
    }
}
function firstItem(items) {
    for(let value in items){
        if (!item.hasOwnProperty(items[value])) {
            item[items[value]] = items[value];
        }
    }
    return item;
}
function difference(items) {
    let differenceSet = new Set();
    for (value in items) {
        if (item.hasOwnProperty(items[value])) {
            differenceSet.delete(items[value]);
        }
    }
    return item;
}
console.log(firstItem({ "A": "a", "B": "b", "C": "c" }));
console.log(difference({ "A": "a", "B1": "b1", "C1": "c1" }));