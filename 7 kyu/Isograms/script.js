function isIsogram(str) {
	return str.length === new Set(str.toLowerCase()).size;
}

const test = "moose";
console.log(isIsogram(test));
