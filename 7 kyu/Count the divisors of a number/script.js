function getDivisorsCnt(n) {
	let divisors = 0;
	for (let divider = 1; divider <= n; divider++) {
		if (n % divider === 0) divisors++;
	}
	return divisors;
}

console.log(getDivisorsCnt(10012412423));
