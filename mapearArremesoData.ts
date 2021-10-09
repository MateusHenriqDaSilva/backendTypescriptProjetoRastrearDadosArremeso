/// <reference path = "./tipos/mapearArremesoTipos.d.ts" />
import mapearArremeso = require('mapearArremeso')
import lodash = require('lodash')

export let data: mapearArremeso.Batedor = {
    batedor: [[12.2, -3], [10.2, -5], [3, 2]],
    lancarBola: [[3, 2], [-12.2, 3], [-10.2, 5]],
}

function encontrarDados(Batedor, lancarBola) {
    return lodash.intersectionWith(Batedor, lancarBola, lodash.isEqual)
}

data.mapaCordenadas = encontrarDados(data.batedor, data.lancarBola)
console.log(data.mapaCordenadas)