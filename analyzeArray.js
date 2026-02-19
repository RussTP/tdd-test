
function analyzeArray(array) {
const object = {};
const length = array.length;
const min = Math.min(...array);
const max = Math.max(...array);
const average =  array.reduce((accu, curr) => accu + curr, 0) / length;

return {
    average: average,
    min: min,
    max: max,
    length: length
    }
}

module.exports = analyzeArray;