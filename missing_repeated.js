// * find a which is repeated twice and b which is missing, in a 2D matrix
// * return a 1D array, which ans[0]=a, and and[1]=b

function findMissingAndRepeatingValues(matrix) {
	const ans = [];

	// ?convert 2D matrix to a 1D array
	const arr = matrix.flat(1);
	let a = null,
		b = null;

	// ?sort the matrix
	arr.sort((a, b) => a - b);
	console.log(arr);

	// ?loop through the matrix and find the missing
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] - arr[i] === 0) {
			console.log('b', arr[i + 1]);
			a = arr[i + 1];
		} else if (arr[i + 1] - arr[i] !== 1) {
			b = arr[i + 1] - 1;
			console.log('a', arr[i + 1] - 1);
		}
	}

	if (arr[arr.length - 1] !== Math) return ans;
}

console.log(
	findMissingAndRepeatingValues([
		[1, 3],
		[2, 2],
	]),
);
