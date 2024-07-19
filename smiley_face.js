function countSmileyFaces(arr) {
	const nose = ['-', '~'];
	const eyes = [':', ';'];
	const mouth = [')', 'D'];
	const validSmileys = [];

	// get all valid smileys
	for (let i = 0; i < eyes.length; i++) {
		for (let z = 0; z < nose.length; z++) {
			for (let j = 0; j < mouth.length; j++) {
				validSmileys.push(eyes[i] + nose[z] + mouth[j]);
			}
		}
	}

	// set valid faces without nose
	let validSmileysWithoutNose = validSmileys.map((smiley) => {
		return smiley.replace(/[-~]/g, '');
	});

	// remove duplicates
	validSmileysWithoutNose = validSmileysWithoutNose.filter((v, i, a) => {
		return a.indexOf(v) === i;
	});

	validSmileys.push(...validSmileysWithoutNose);

	console.log(validSmileys);

	// count valid smileys
	let count = 0;
	arr.forEach((smiley) => {
		if (validSmileys.includes(smiley)) {
			count++;
		}
	});
}

countSmileyFaces([':)', ';(', ';}', ':D']); // 2
