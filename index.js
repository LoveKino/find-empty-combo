'use strict';

/**
 * There is a list of set, try to find a combo of set which interset is empty set
 *
 * {S1, S2, ..., Sn}, find Si ∩ Sj ∩ ... ∩ Sr = Ф
 */

/**
 *
 * Define set F = {S1, S2, ..., Sn}.
 *
 * Let A be the all elements of set list F.
 *
 * Define w(a, S), if a ϵ S, w(a, S) = 1, otherwise w(a, S) = 0.
 *
 * Define φ(a) = {S | w(a, S) = 0, S ϵ F};
 *
 * Let Vi ϵ φ(ai), 1 <= i <= |A|
 *
 * ∩ Vi = Ф (vice versa)
 *
 */

/**
 * set is an array of strings
 *
 * setList = {S1, S2, ..., Sn}
 * itemList = {a1, a2, ..., am}
 *
 * O(m * n)
 *
 * 1. search item doesn't containing sets
 * 2. search set doesn't containing items
 */
let getContainMatrix = (setList) => {
    let itemContainMap = {};
    let itemNotContainMap = {};

    let setListLen = setList.length;

    for (let i = 0; i < setListLen; i++) {
        let set = setList[i];
        let setLen = set.length;

        for (let j = 0; j < setLen; j++) {
            let item = set [j];
            let map = itemContainMap[item] = itemContainMap[item] || {};
            map[i] = 1;
        }
    }

    // calculate not contain map
    for (let item in itemContainMap) {
        let map = itemNotContainMap[item] = {};

        let list = itemContainMap[item];
        for (let i = 0; i < setListLen; i++) {
            if (!list[i]) {
                map[i] = 1;
            }
        }
    }

    return itemContainMap;
};

let getNotContainMatrix = (itemContainMap, setListLen) => {
    let itemNotContainMap = {};

    // calculate not contain map
    for (let item in itemContainMap) {
        let map = itemNotContainMap[item] = {};

        let list = itemContainMap[item];
        for (let i = 0; i < setListLen; i++) {
            if (!list[i]) {
                map[i] = 1;
            }
        }
    }

    return itemNotContainMap;
};

module.exports = {
    getContainMatrix,
    getNotContainMatrix
};
