"use strict";
exports.__esModule = true;
var fp_1 = require("lodash/fp");
var ramda_1 = require("ramda");
var addOneLodash = fp_1.add(1);
var addedArrayLodash = [1, 2, 3].map(addOneLodash);
console.log({ lodash: addedArrayLodash });
var addedArrayRamda = ramda_1.map(ramda_1.add(1), [1, 2, 3]);
console.log({ ramda: addedArrayRamda });
