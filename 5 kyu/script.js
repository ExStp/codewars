function generateHashtag(str) {
	if (!str.trim()) return false;
	const wordsArr = str
		.trim()
		.split(" ")
		.filter((str) => str !== "");

	const formattedStr = wordsArr.map((word) => {
		word.toLowerCase();
		return word[0].toUpperCase() + word.slice(1);
	});
	const hashtagStr = "#" + formattedStr.join("");
	if (hashtagStr.length > 140) return false;
	return hashtagStr;
}

const test = "a".repeat(139);
console.log(generateHashtag(test));
