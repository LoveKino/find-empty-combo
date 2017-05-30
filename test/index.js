'use strict';

let {
    getContainMatrix,
    getNotContainMatrix
} = require('..');

let assert = require('assert');

describe('index', () => {
    it('base', () => {
        let containMatrix = getContainMatrix([
            ['a', 'b'],
            ['b', 'c']
        ]);

        let notContainMatrix = getNotContainMatrix(containMatrix, 2);

        assert.deepEqual(containMatrix, {
            a: {
                '0': 1
            },
            b: {
                '0': 1,
                '1': 1
            },
            c: {
                '1': 1
            }
        });

        assert.deepEqual(notContainMatrix, {
            a: {
                '1': 1
            },
            b: {},
            c: {
                '0': 1
            }
        });
    });

    it('containMap', () => {
        let containMatrix = getContainMatrix([
            ['a'],
        ]);

        let notContainMatrix = getNotContainMatrix(containMatrix, 1);

        assert.deepEqual(containMatrix, {
            a: {
                '0': 1
            }
        });

        assert.deepEqual(notContainMatrix, {
            a: {}
        });
    });

    it('containMap2', () => {
        let containMatrix = getContainMatrix([
            ['a'],
            ['b'],
            ['c']
        ]);

        let notContainMatrix = getNotContainMatrix(containMatrix, 3);

        assert.deepEqual(containMatrix, {
            a: {
                '0': 1
            },
            b: {
                '1': 1
            },
            c: {
                '2': 1
            }
        });

        assert.deepEqual(notContainMatrix, {
            a: {
                '1': 1,
                '2': 1
            },
            b: {
                '0': 1,
                '2': 1
            },
            c: {
                '0': 1,
                '1': 1
            }
        });
    });
});
