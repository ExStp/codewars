function sumOfMinimums(arr) {
    return arr.reduce((acc, item) => acc += Math.min(...item),0);
}
console.log(
    sumOfMinimums([
        [11, 12, 14, 54],
        [67, 89, 90, 56],
        [7, 9, 4, 3],
        [9, 8, 6, 7],
    ])
);
