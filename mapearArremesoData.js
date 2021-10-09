"use strict";
exports.__esModule = true;
exports.data = void 0;
var lodash = require("lodash");
exports.data = {
    batedor: [[12.2, -3], [10.2, -5], [3, 2]],
    lancarBola: [[3, 2], [-12.2, 3], [-10.2, 5]]
};
function encontrarDados(Batedor, lancarBola) {
    return lodash.intersectionWith(Batedor, lancarBola, lodash.isEqual);
}
exports.data.mapaCordenadas = encontrarDados(exports.data.batedor, exports.data.lancarBola);
console.log(exports.data.mapaCordenadas);
