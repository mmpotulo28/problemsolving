function expand(num) {
	let expanded = '';
	num = String(num);
	const zeroz = '0'.repeat(num.length - 1);

	for (let i = 0; i < num.length; i++) {
		expanded += num[i] + zeroz + ' + ';
		zeroz = zeroz.slice(1);
	}
}

expand(123);
