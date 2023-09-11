const binaryArrayToNumber = (arr) => {
	return arr.reverse().reduce((acc, value, index) => acc + value * 2 ** index, 0);
};

const test1 = [1, 1, 1, 1];
console.log(binaryArrayToNumber(test1));
