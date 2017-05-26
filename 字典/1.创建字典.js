/**
 * Created by Jinxin on 2017/5/11.
 */
let item = {};
function Dictionary() {
    this.has = function (key) {
        return key in item;
    };
    this.set = function (key, value) {
        item[key] = value;
        return item;
    };
    this.delete = function (key) {
        if (this.has(key)) {
            delete item[key];
        }
        return item;
    };
    this.get = function (key) {
        if (this.has(key)) {
            return item[key];
        } else {
            return "无此数据";
        }
    };
    this.value = function () {
        let values = [];
        for (let key in item) {
            values.push(item[key]);
        }
        return values;
    };
    this.clear = function () {
        item = {};
        return item;
    };
    this.size = function () {
        return Object.keys(item).length;
    };
    this.key = function () {
        return Object.keys(item);
    };
    this.getItem = function () {
        return item;
    }
}
let dictionary = new Dictionary();

console.log(dictionary.has("A"));
console.log(dictionary.set("B", "b"));
console.log(dictionary.set("C", "c"));
console.log(dictionary.set("D","d"));
console.log(dictionary.delete("D"));
console.log(dictionary.get("B"));
console.log(dictionary.value());
console.log(dictionary.size());
console.log(dictionary.key());
console.log(dictionary.getItem());
console.log(dictionary.clear());