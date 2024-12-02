const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


function findCommonElements(array1, array2) {
    return [...new Set(array1.filter(x => array2.includes(x)))];
}

console.log(findCommonElements(array1, array2)); // [3, 4, 5]