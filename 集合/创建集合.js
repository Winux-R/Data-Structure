/**
 * Created by Jinxin on 2017/5/10.
 */
function Set() {
    let item = {};
    this.has = function (value) {
        return item.hasOwnProperty(value)
    };
    this.add = function (value) {
        if (!this.has(value)) {
            item[value] = value;
            return item;
        } else {
            return "集合中已经存在该数据";
        }
    };
    this.delete = function (value) {
        if (this.has(value)) {
            delete item[value];
            return item;
        }else {
            return "集合中不存在该数据";
        }
    };
    this.clear = function () {
        item = {};
        return item;
    };
    this.size = function () {
        return Object.keys(item).length;
    };
    this.value = function () {
        return Object.keys(item);
    }
}
let set = new Set();
console.log(set.has("a"));
console.log(set.add("a"));
console.log(set.add("b"));
console.log(set.value());
console.log(set.size());
console.log(set.delete("b"));
console.log(set.clear());