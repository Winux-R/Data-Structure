/**
 * Created by Jinxin on 2017/5/11.
 */
function HashTable() {
    let table = [];
    /**
     * 散列函数
     */
    this.loseloseHashCode = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    this.put  = function (key, value) {
        let position = this.loseloseHashCode(key);
        table[position] = value;
        return table;
    };
    this.delete = function (key) {
        let position = this.loseloseHashCode(key);
        table[position] = undefined;
        return table;
    };
    this.get = function (key) {
        let position = this.loseloseHashCode(key);
        return table[position];
    };
}
let hashTable = new HashTable();

console.log(hashTable.put("Victor", "victor"));
console.log(hashTable.get("Victor"));
console.log(hashTable.delete("Victor"));