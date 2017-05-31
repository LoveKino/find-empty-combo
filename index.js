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
 * m * n matrix
 */
let getBelongMatrix = (setList) => {
    let setListLen = setList.length;
    let itemMap = {};

    for (let i = 0; i < setListLen; i++) {
        let set = setList[i];
        let setLen = set.length;
        for (let j = 0; j < setLen; j++) {
            let item = set [j];
            let belongList = itemMap[item] = itemMap[item] || new Array(setLen);
            belongList[i] = 1;
        }
    }

    let matrix = [],
        items = [];
    for (let item in itemMap) {
        items.push(item);
        matrix.push(itemMap[item]);
    }

    return {
        matrix, items
    };
};

let findMinEmptyCombosByMatrix = (matrix, rows, setLen) => {
    let result = [];

    let firstRow = rows[0];
    let firstBelongList = matrix[firstRow];

    for (let i = 0; i < setLen; i++) {
        let item = firstBelongList[i];
        if (item !== 1) {
            // step1 cross lines
            let newRows = [];

            let rowLen = rows.length;
            for (let j = 0; j < rowLen; j++) {
                let row = rows[j];
                if (matrix[row][i] === 1) {
                    newRows.push(row);
                }
            }

            rows = newRows; // won't include ith set any more

            if (!rows.length) {
                result.push([i]);
            } else {
                // step2 get rest
                let next = findMinEmptyCombosByMatrix(matrix, rows, setLen);
                let nextLen = next.length;

                for (let j = 0; j < nextLen; j++) {
                    let nextItem = next[j];
                    nextItem.unshift(i);
                    result.push(nextItem);
                }
            }
        }
    }

    return result;
};

let findMinEmptyCombos = (setList) => {
    let {
        matrix
    } = getBelongMatrix(setList);
    let initRows = [];
    let matrixLen = matrix.length;
    for (let i = 0; i < matrixLen; i++) {
        initRows.push(i);
    }

    return findMinEmptyCombosByMatrix(matrix, initRows, setList.length);
};

module.exports = {
    getBelongMatrix,
    findMinEmptyCombos,
    findMinEmptyCombosByMatrix
};
