'use strict';

let {
    findMinEmptyCombos
} = require('..');

let assert = require('assert');

describe('index', () => {
    it('base', () => {
        assert.deepEqual(findMinEmptyCombos([
            ['a'],
            ['a', 'b'],
            ['c']
        ]), [
            [2, 0],
            [2, 1]
        ]);
    });

    it('empty', () => {
        assert.deepEqual(findMinEmptyCombos([]), []);

        assert.deepEqual(findMinEmptyCombos([
            [],
            []
        ]), [
            [0],
            [1]
        ]);

        assert.deepEqual(findMinEmptyCombos([
            [],
            ['a']
        ]), [
            [0]
        ]);

        assert.deepEqual(findMinEmptyCombos([
            [],
            ['a'],
            ['b']
        ]), [
            [0],
            [2, 1]
        ]);

        assert.deepEqual(findMinEmptyCombos([
            [],
            ['b', 'v'],
            ['b']
        ]), [
            [0]
        ]);

        assert.deepEqual(findMinEmptyCombos([
            ['a']
        ]), []);

        assert.deepEqual(findMinEmptyCombos([
            ['a'],
            ['a', 'b']
        ]), []);

        assert.deepEqual(findMinEmptyCombos([
            ['a', 'c', 'b'],
            ['a', 'b'],
            ['b', 'c']
        ]), []);
    });

    it('single', () => {
        assert.deepEqual(findMinEmptyCombos([
            ['a'],
            ['b']
        ]), [
            [1, 0]
        ]);
    });

    it('single2', () => {
        assert.deepEqual(findMinEmptyCombos([
            ['a'],
            ['b'],
            ['c']
        ]), [
            [1, 0],
            [1, 2],
            [2, 0]
        ]);
    });

    it('interset', () => {
        assert.deepEqual(findMinEmptyCombos([
            ['a', 'b', 'c'],
            ['b', 'd', 'e'],
            ['e', 'f', 'g']
        ]), [
            [2, 0]
        ]);
    });

    it('independet', () => {
        assert.deepEqual(findMinEmptyCombos([
            ['a', 'b'],
            ['d', 'e'],
            ['f', 'g'],
            ['h', 'k']
        ]), [
            [1, 0],
            [1, 2],
            [1, 3],
            [2, 0],
            [2, 3],
            [3, 0]
        ]);
    });
});
