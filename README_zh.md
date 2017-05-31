# find-empty-combo

[中文文档](./README_zh.md)   [document](./README.md)

There is a list of set, try to find a combo of set which interset is empty set
- [安装](#%E5%AE%89%E8%A3%85)
- [problem](#problem)
- [使用方法](#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
  * [API 快速运行](#api-%E5%BF%AB%E9%80%9F%E8%BF%90%E8%A1%8C)
- [开发](#%E5%BC%80%E5%8F%91)
  * [文件结构](#%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84)
  * [运行测试用例](#%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B)
- [许可证](#%E8%AE%B8%E5%8F%AF%E8%AF%81)

## 安装

`npm i find-empty-combo --save` 或者 `npm i find-empty-combo --save-dev`

全局安装, 使用 `npm i find-empty-combo -g`

## problem

There is a list of set, try to find all minimal combo of sets which intersets is a empty set.

- minimal combo

Let `Si1 ∩ Si1 ∩ ... ∩ Sik=Ф`, if missing set Sij (1 <= j <= k), the intersets will not be empty set.

## 使用方法








### API 快速运行



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
输出

    [ [ 1, 0 ], [ 1, 2 ], [ 1, 3 ], [ 2, 0 ], [ 2, 3 ], [ 3, 0 ] ]

```


## 开发

### 文件结构

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


### 运行测试用例

`npm test`

## 许可证

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
