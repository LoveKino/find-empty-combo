# find-empty-combo

[中文文档](./README_zh.md)   [document](./README.md)

There is a list of set, try to find a combo of set which interset is empty set
- [install](#install)
- [problem](#problem)
- [usage](#usage)
  * [API quick run](#api-quick-run)
- [develop](#develop)
  * [file structure](#file-structure)
  * [run tests](#run-tests)
- [license](#license)

## install

`npm i find-empty-combo --save` or `npm i find-empty-combo --save-dev`

Install on global, using `npm i find-empty-combo -g`

## problem

There is a list of set, try to find all minimal combo of sets which intersets is a empty set.

- minimal combo

Let `Si1 ∩ Si1 ∩ ... ∩ Sik=Ф`, if missing set Sij (1 <= j <= k), the intersets will not be empty set.

## usage








### API quick run



```js
let FindEmptyCombo = require('find-empty-combo')
let {findMinEmptyCombos} = FindEmptyCombo;

let ret = findMinEmptyCombos([
    ['a', 'b'], // set 0
    ['d', 'e'], // set 1
    ['f', 'g'], // set 2
    ['h', 'k'] // set3
]);

console.log(ret); // return all minimal combos, for each combo is an array of set indexs.
```

```
output

    [ [ 1, 0 ], [ 1, 2 ], [ 1, 3 ], [ 2, 0 ], [ 2, 3 ], [ 3, 0 ] ]

```


## develop

### file structure

```
.    
│──LICENSE    
│──README.md    
│──README_zh.md    
│──index.js    
│──package.json    
└──test    
    └──index.js     
```


### run tests

`npm test`

## license

MIT License

Copyright (c) 2017 chenjunyu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
