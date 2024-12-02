const numbers = [1, 2, 3, 4, 5];

function analyzeArray(numbers) {
    let result = numbers.reduce((acc, num) => {
        acc.sum += num;
        acc.min = Math.min(acc.min, num);
        acc.max = Math.max(acc.max, num);
        return acc;
    }, { sum: 0, min: Infinity, max: -Infinity });
    return {
        sum: result.sum,
        average: result.sum / numbers.length,
        min: result.min,
        max: result.max
    };

}
console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }